class Quadrado {

    constructor(lado) {
        this._lado = lado;
    }

    mudarLado(lado) {
        return this._lado = lado;
    }

    retornarLado() {
        return this._lado;
    }

    calcularArea() {
        return this._lado * this._lado;
    }
}