const letters = ['a', 'b', 'c', 'd', 'e']

const newArray = letters.map(element => element.toUpperCase())
console.log(newArray)

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
// const newOrders = orders.map(item =>{
// item.tax = item.total*.18
// return item
// // })
// console.log(' --------- array nuevo ---------')

// console.log(newOrders)
// console.log('--------- array original ---------')
// console.log(orders)
// se modifica el array orders ( no permanece inmutable)

// ahora haremos que el array orders permanezca inmutable
const newOrders2 = orders.map(item => {
return{
  ...item,
  tax: item.total*.18,
}
})

console.log(' --------- array nuevo ---------')

console.log(newOrders2)
console.log('--------- array original ---------')
console.log(orders)

// //output
// --------- array nuevo ---------
// [
//   { customerName: 'Nicolas', total: 60, delivered: true, tax: 10.799999999999999 },
//   { customerName: 'Zulema',  total: 120,delivered: false,tax: 21.599999999999998  },
//   { customerName: 'Santiago', total: 180, delivered: true, tax: 32.4 },
//   { customerName: 'Valentina',total: 240, delivered: true, tax: 43.199999999999996 }
// ]
// --------- array original ---------
// [
//   { customerName: 'Nicolas', total: 60, delivered: true },
//   { customerName: 'Zulema', total: 120, delivered: false },
//   { customerName: 'Santiago', total: 180, delivered: true },
//   { customerName: 'Valentina', total: 240, delivered: true }
// ]
