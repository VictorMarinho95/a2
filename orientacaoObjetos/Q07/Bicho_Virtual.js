class Tamagushi {
    constructor(nome, fome, saude, idade) {
        this._nome = nome;
        this._fome = fome;
        this._saude = saude;
        this._idade = idade;
}
    
    alterarNome(nome) {
         return this._nome = nome;
    }
    
    alterarFome(fome) {
        if(fome >= 0 && fome <= 10) {
            return this._fome = fome;
        } else {
            return false;
        }
    }
    
    alterarSaude(saude) {
        if(saude >= 0 && saude <= 10) {
            return true;
        } else {
            return false;
        }
    }
    
    alterarIdade(idade) {
        if(idade >= 1 && idade <= 100) {
            return true;
        } else {
            return false;
        }
    }
    
    retornarFome(fome) {
            if (this._fome < 5) {
            return 'Fome';
            } else {
                return 'Cheio';
            }
        } 
    
    retornarSaude(saude) {
        if(saude < 5) {
            return 'Doente';
        } else {
            return 'Saudável';
        }
    }
    
    retornarIdade(idade) {
        if (idade >= 1 && idade <= 12) {
            return 'Criança';
        } else if (idade >=13 && idade <= 22) {
            return 'Adolecente';
        } else if (idade >= 23 && idade <= 60) {
            return 'Adulto';
        } else if (idade > 60) {
            return 'Idoso'
        }
    }
        
}
