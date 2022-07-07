// Sell Price (official without taxes) 

const fromArsToUsd= [{
    base: "ARS",
    result: 0.00791,
    updated: "2022-07-06 19:50:21",
    ms: 2
  }]

export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number * fromArsToUsd.map((item)=> {
        return item.result
      }))
}


  