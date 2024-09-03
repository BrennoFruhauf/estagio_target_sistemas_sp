const prompt = require('prompt-sync')()

;(() => {
	console.log('Saber se é um número da sequência de Fibonacci')
	const numero = parseInt(prompt('Digite um número: '))

	ehNumeroFibonacci(numero)
		? console.log(`${numero} é um número de Fibonacci`)
		: console.log(`${numero} não é um número de Fibonacci`)
})()

function fibonacci(numero) {
	if (numero === 0) return 0
	if (numero === 1) return 1
	return fibonacci(numero - 1) + fibonacci(numero - 2)
}

function ehNumeroFibonacci(numero) {
	let iterador = 0
	let numeroFibonacci = fibonacci(iterador)

	while (numeroFibonacci <= numero) {
		if (numeroFibonacci === numero) return true

		iterador++
		numeroFibonacci = fibonacci(iterador)
	}

	return false
}
