//---Create an object named myCar and give it properties named make, model, and year (use your
favorite car)---//


//Object literal
const myCar = {
    brand:'Seat',
    model:'Leon',
    year:'2008'
}

//Object Constructor
function myCar (brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const Seat = new myCar('Seat','Leon','2008');

// Object.create method
var myCar = {
    brand:'Seat',
    model:'Leon',
    year:'2008'
}

var  Seat = Object.create(myCar);
Seat.brand = 'Seat';
Seat.model = 'Leon';
Seat.year =  '2008';
