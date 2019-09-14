import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

class Car {
	constructor(name) {
		this.brand = name;
	};
	present() {
		return 'I have a ' + this.brand;

	};

};
class Model extends Car {
	constructor(name, mod){
		super(name);
		this.model = mod;
	}
	show(){
		return this.present() + ", it is a " + this.model;
	}

}

var myCar = new Model("Ford", "Mustang");
myCar.present();
ReactDOM.render(
	myCar.show(),
	document.getElementById('root')
);