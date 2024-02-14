export const dateFormatter = new Intl.DateTimeFormat('pt-br');

export const priceFormater = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});