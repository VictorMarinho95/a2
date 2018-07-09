class Tv {
	constructor(canal, volume) {
		this._canal = canal;
		this._volume = volume;
	}

	alterarVolume(valor) {
		if (this._volume >= 0 && this._volume <= 100) {
			this._volume = valor;
			return true;
		} else {
			return false;
		}
	}
	
	alterarCanal(numero_canal) {
		if (this._canal >=1 && this._canal <= 150) {
			this._canal = numero_canal;
			return true;
		} else {
			return false;
		}
	}
}