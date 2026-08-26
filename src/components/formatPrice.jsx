// Format price - retail_price_cents is stored in cents, convert to dollars
export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
}
