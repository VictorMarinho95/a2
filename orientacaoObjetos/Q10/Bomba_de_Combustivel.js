class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this._tipoCombustivel = tipoCombustivel;
        this._valorLitro = valorLitro;
        this._quantidadeCombustivel = quantidadeCombustivel;
    }
    //metodo onde é imformado o valor a ser abastecido e mostra a quantidde de litros colocada.
    abastecePorValor(valor) {
        this._quantidadeCombustivel = this._valorLitro * valor;
        return this._quantidadeCombustivel;
    }
    //metodo onde é informado a quantidade de litros de combustivel e mostra o valor a ser pago.
    abastecePorLitro(litros) {
        this._quantidadeCombustivel = litros;
        return this._quantidadeCombustivel / this._valorLitro;
    }
    
}