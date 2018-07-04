class ContaCorrente {

	constructor(numeroConta, nomeCorrentista, saldo) {
		this._numeroConta = numeroConta;
		this._nomeCorrentista = nomeCorrentista;
		this._saldo = 0;
	}

	alterarNome(novoCorrentista) {
		this._nomeCorrentista = novoCorrentista;
	}

	depositar(valor) {
		if (valor > 0) {
			this._saldo += valor;
			return true;
		}
		return false;
	}

	sacar(valor) {
		if (valor > 0 && this._saldo >= valor) {
			this._saldo -= valor;
			return true; 
		}
		return false;
	}

	toString() {
		return 'Conta{correntista: ' + this._nomeCorrentista + '.,\ numero: '+this._numero + ',\ saldo: ' + this._saldo + '\'}
	}
	transferir(valor, conta_destino) {

	}
}