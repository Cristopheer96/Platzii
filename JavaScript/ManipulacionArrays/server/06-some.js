const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let rta = numbers.some(item => item%2 === 0);
console.log(rta)

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment = {
    startDate: new Date (2021,1,1,8),
    endDate: new Date (2021,1,1,9,30),
};


var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping') // funcion que devuelve si las fechas se solapan

const isOverlap = (newdate) =>{
  return dates.some(date=> {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate},
      { start: newdate.startDate, end: newdate.endDate},
    )
  })
}
console.log('IsOverLap',isOverlap(newAppointment))
