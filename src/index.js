import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(
    myfirstelement,
    document.getElementById('root')
);
class Car{
	constructor(name){
		this.brand = name;
	}
	present(){
		return 'I have a ' + this.brand; 
		
	}

}
var myCar = new Car("Ford");
myCar.present();