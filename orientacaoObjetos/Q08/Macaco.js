class Macaco {
    constructor(nome, bucho) {
        this._nome = nome;
        this._bucho = [];
    }
    
    comer(refeicao) {
       return this._bucho.push(refeicao);
    }
    
    verBucho() {
         return this._bucho;
    }
    
    digerir(refeicao) {
        return this._bucho.shift(refeicao);
    }
    
}