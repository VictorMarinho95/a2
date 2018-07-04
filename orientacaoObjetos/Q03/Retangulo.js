class Retangulo {

	constructor(base, altura) {
		this._base = base;
		this._altura = altura;
	}

	definirBase(base) {
		this._base = base;
	}

	definirAltura(altura) {
		this._altura = altura;
	}

	obterBase() {
		return this._base;
	}

	obterAltura() {
		return this._altura;
	}

	obterArea() {
		return this._base * this._altura;
	}

	obterPerimetro() {
		return (this._base * 2) + (this._altura * 2);
	}
}