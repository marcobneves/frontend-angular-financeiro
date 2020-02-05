export interface ITransaction{
    dataLancamento: string,
    descricao: string,
    numero: string,
    situacao: string,
    datadeConfirmacao: string,
    valorFinal: string,
    banco: string,
    agencia: number,
    numeroConta: string,
    contaTipo: string
}