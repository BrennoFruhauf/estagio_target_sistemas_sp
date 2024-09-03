const prompt = require('prompt-sync')()

;(() => {
	const texto = prompt('Digite um texto: ')
	const contagem = contarLetrasA(texto)
	console.log(`A letra 'a' ocorre ${contagem} vezes no texto.`)
})()

function contarLetrasA(texto) {
	if (texto === '') return 0

	let iterador = 0
	for (const letra of texto.toLowerCase()) if (letra === 'a') iterador++

	return iterador
}
