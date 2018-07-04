  class Quadrado {
    constructor(_lado) {
      this._lado = lado;
    }
      
    setLado(lado) {
        return this._lado = lado;
    } 

    getArea() {
        return this.calculaArea();  
    }  

    calculaArea() {  
        return this._lado * this._lado;  
    }
}