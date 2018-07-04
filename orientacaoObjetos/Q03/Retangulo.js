class Retangulo {

	constructor(_base, _altura) {
		this._base = base;
		this._altura = altura;
	}

	setBase(base) {
		this._base = base;
	}

	setAltura(altura) {
		this._altura = altura;
	}

	getArea() {
		return  this._base * this._altura;
	}
    
    getPerimetro() {
        return getArea() * 2;
    }
}