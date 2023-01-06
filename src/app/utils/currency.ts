export const uah = (value:number) => new Intl.NumberFormat('ua', {currency: 'UAH', style: 'currency'}).format(value)
