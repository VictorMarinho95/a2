class Pessoa {
	constructor(nome, idade, peso, altura) {
		this._nome = nome;
		this._idade = idade;
		this._peso = peso;
		this._altura = altura;
	}
	envelhecer() {
		this._idade++;
		this._crescer();
	}

	engordar() {}

	emagrecer() {}

	crescer() {
		if (this._idade < 21) {
			this._altura += .005;
		}
	}

	getIdade() {
		return this._idade;
	}

	getAltura() {
		return this._altura;
	}
}