import { Before, Given, Then, When, After } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../app.po';

let page: AppPage;

Before(async () => {
  page = new AppPage();
});

// Deve filtrar transacoes pendentes
Given("estou na tela Dashboard", async () => {
  await page.navigateTo();
});

When("seleciono o filtro pendente", async () => {
  await page.clickCheckBox('pendente');
});

Then("visualizo as transacoes pendentes na listagem", async () => {
  await page.countItemTable().count().then((totaTransaction) => {
    expect(34).to.equal(totaTransaction);
  })
});

// Deve filtrar transacoes pagas
When("seleciono o filtro pago", async () => {
  await page.clickCheckBox('pago');
});

Then("visualizo as transacoes pagas na listagem", async () => {
  await page.countItemTable().count().then((totaTransaction) => {
    expect(38).to.equal(totaTransaction);
  })
});

// Deve filtrar transacoes pagas e pendentes
When("seleciono o filtro pago e pendente", async () => {
  await page.clickCheckBox('pago');
  await page.clickCheckBox('pendente');
});

Then("visualizo todas as transacoes pagas e pendentes", async () => {
  await page.countItemTable().count().then((totaTransaction) => {
    expect(72).to.equal(totaTransaction);
  })
});
