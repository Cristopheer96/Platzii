const letters = ['a', 'b', 'c', 'd', 'e']

for (var i = 0; i < letters.length; i++) {
  const element = letters[i]
  console.log(element)
}

letters.forEach( element => { console.log(element+'-')})
