//aula objetos
//const professor = {
   // nome: "vitor",
   // idade: 27,
   // email: "vitor@gmail.com"
//}
//console.log(professor.idade);
//console.log(professor["email"]);
//professor.nome = "Mika"
//professor["email"] = "profmika@gmail.com"
//console.log(professor.nome);
//console.log(professor["email"]);

//exercicio 1
const filme = {
    nomeFilme: "titanic",
    dadosDirecao: "James Cameron",
    anoLancamento: 1997,
    elenco: ["leonardoDiCaprio", "kate", "billy", "bill"],
    vizualizacao: Boolean(true),
}
console.log(filme.nomeFilme);
console.log(filme["dadosDirecao"]);
console.log(filme.anoLancamento);
console.log(filme["elenco"]);
console.log(filme.vizualizacao);

//exercicio 2
const objeto = {
    nome: "JotaPe",
    idade: 20,
   generoMusical: "Rap",
}
   console.log("O nome da pessoa é", objeto.nome, "ela tem", objeto.idade, "anos e gosta muito de", objeto.generoMusical);

//acessando objetos dentro de objetos
//const donoDoPet = {
    //nomeDono: "vitor hugo",
    //pet: {
        //nomeDoPet: "wanda",
       // raca: "vira-lata",
       // idade: 1,
    //}
//}
//console.log(donoDoPet.pet.nomeDoPet);

//exemplo 2
//const curso = {
    //nome: "noturno frontend",
    //linguagens: ["js", "CSS", "HTML"],
//}
//console.log(curso.linguagens[0]);

//array de objetos
//const professores = [
   // {nome1: "andrei", modulo: 1},
   // {nome2: "vitor", modulo: 2},
//]
//console.log(professores.nome1[1]);

//add propriedades aos objetos
//curso.numeroEstudantes = 50
//curso["numeroEstudantes"] = 50

//exercicio 3
filme.personagens = ["jack", "rose"];
console.log(filme.elenco[0], "representa no filme", filme.personagens[0]);
console.log(filme.elenco[1], "representa no filme", filme.personagens[1]);

filme.elenco[0] = "xuxa"
console.log(filme.nomeFilme);
console.log(filme["dadosDirecao"]);
console.log(filme.anoLancamento);
console.log(filme["elenco"]);
console.log(filme.vizualizacao);

//Espalhamento ou spread
const usuario = {
    nome: 'prof',
    idade: 25,
    emial: 'prof@senacrs.com',
    cidade: 'são paulo'
}

const novoUsuario = {
    ...usuario,
    nome: 'joao',
    idade: 28
}

//sobreescrevendo valores
const listaNomes = ["mika", "paula", "vitor"];
const copiaListaNomes = [...listaNomes];
copiaListaNomes[0] = "vitor"
console.log(copiaListaNomes);

//exercicio4
function pessoa(objetoA) {
  let novoObjeto = {
        ...objetoA,
        lista: ['arroz', 'feijao'],
        melhorAmigo: {
            nomeMelhorAmigo: "Fernando",
            idadeMelhorAmigo: 20,
        }
    }
  console.log('o nome da pessoa é' + novoObjeto.nome + 'e suas comidas preferidas são' + novoObjeto.lista[0] + 'e' + novoObjeto.lista[1] + 'seu melhor amigo se chama' + novoObjeto.melhorAmigo.nomeMelhorAmigo + 'e tem' + novoObjeto.melhorAmigo.idadeMelhorAmigo + 'anos');
}
pessoa(objeto);
