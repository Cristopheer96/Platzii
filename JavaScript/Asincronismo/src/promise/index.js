const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('hey! good');
    }
    else{
      reject ('bad news!');
    }
  });
};

somethingWillHappen()
  .then (response => console.log(response)) // si todoesta ok
  .catch (err => console.log(err));          // si pasa algo negativo

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('SWH2 Todo bien')
      }, 4000);
    }
    else{
      const err = new Error('algo malo paso')
      reject(err);
    }
  });
}

somethingWillHappen2()
  .then (response => console.log(response))
  .catch (err => console.log(err));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
  .then (response => console.log("Array of results",response))
  .catch (err => console.log(err));
