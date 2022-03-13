/*
Quando clicar no pokemon da listagem temos que esconder o cartao pokemon aberto e mostrar o cartão  correspondente que foi selecionado

trabalhar com 
1- listagem
2- cartao pokemon

criar variaveis no JS para trabalhar com os elementos na tela

sera preciso trabalhar com o evento de click feito pelo usuario
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
//console.log(listaSelecaoPokemons)
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        const cartaoPokemonAtivoNaListagem = document.querySelector('.ativo')
        cartaoPokemonAtivoNaListagem.classList.remove('ativo')
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})