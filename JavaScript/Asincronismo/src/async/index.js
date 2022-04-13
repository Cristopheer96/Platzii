const doSomethingAsync = () => {
  return new Promise((resolve, reject)=> {
    (true)
      ? setTimeout(() => resolve('Do Something'),3000)
      : reject(new Error('Test Error'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something,new Date() )
}


console.log('Before 1',new Date())
// doSomething()
console.log('after 1',new Date())

const anotherFunction = async () => {
  try {
  const something = await doSomethingAsync();
  console.log(something,new Date() )
  } catch (err) {
    console.error(err)
  }
}

console.log('Before 2',new Date())
anotherFunction()
console.log('after 2',new Date())
