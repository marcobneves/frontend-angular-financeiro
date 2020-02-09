export interface ITotalLancamento {
    quantidadeLancamentos: number,
    quantidadeRemessas: number,
    valorLancamentos: number
}

export interface IDadosDomicilioBancario {
    codigoBanco: number,
    numeroAgencia: number,
    numeroContaCorrente: string
}

export interface ILancamentoContaCorrenteCliente {
    numeroRemessaBanco: number,
    dadosAnaliticoLancamentoFinanceiroCliente?: any,
    nomeSituacaoRemessa: string,
    dadosDomicilioBancario: IDadosDomicilioBancario,
    nomeTipoOperacao: string
}

export interface IListaControleLancamento {
    lancamentoContaCorrenteCliente: ILancamentoContaCorrenteCliente,
    dataEfetivaLancamento: string,
    dataLancamentoContaCorrenteCliente: string,
    numeroEvento: number,
    descricaoGrupoPagamento: string,
    codigoIdentificadorUnico: string,
    nomeBanco: string,
    quantidadeLancamentoRemessa: number,
    numeroRaizCNPJ: string,
    numeroSufixoCNPJ: string
    valorLancamentoRemessa: number,
    dateLancamentoContaCorrenteCliente: number,
    dateEfetivaLancamento: number
}

export interface ITransacao {
    totalControleLancamento: ITotalLancamento,
    listaControleLancamento: Array<IListaControleLancamento>,
    indice: number,
    tamanhoPagina: number,
    totalElements: number
}