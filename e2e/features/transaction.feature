Feature: Filtrar transacoes

  Scenario: Deve filtrar transacoes pendentes
    Given estou na tela Dashboard
    When seleciono o filtro pendente
    Then visualizo as transacoes pendentes na listagem

  Scenario: Deve filtrar transacoes pagas
    Given estou na tela Dashboard
    When seleciono o filtro pago
    Then visualizo as transacoes pagas na listagem

  Scenario: Deve filtrar transacoes pagas e pendentes
    Given estou na tela Dashboard
    When seleciono o filtro pago e pendente
    Then visualizo todas as transacoes pagas e pendentes