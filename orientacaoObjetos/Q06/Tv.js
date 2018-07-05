class Tv {
    constructor(volume, canal) {
        this._volume = volume;
        this._canal = canal;
    }
    
    alterarVolume(valor) {
        if(valor >= 0 && valor <= 100) {
            this._volume = valor;
            return true;
        } else {
            return false;
        }
    }
    
    alterarCanal(numero) {
        if(numero > 0 && numero <= 150) {
            this.canal = numero;
            return true;
        } else {
            return false;
        }
    }
}