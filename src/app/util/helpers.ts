export const formatCurrency = (amount) => {
    return `R$ ${(amount).toLocaleString('pt-BR')}`
}