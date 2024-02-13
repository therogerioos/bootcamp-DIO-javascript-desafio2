let vitorias = 22
let derrotas = 5

let saldoPartidas = saldoRankeadas(vitorias, derrotas)
let nivelRankeadas = verificarRanking(saldoPartidas)

console.log(`O Herói tem de saldo de ${saldoPartidas} está no nível de ${nivelRankeadas}`)

function saldoRankeadas(vitorioso, derrotado){
    let calculoRanking = vitorioso - derrotado
    return calculoRanking
}

function verificarRanking(saldo){
    switch (true){
        case (saldo <= 10):
            return "Ferro"
        case (saldo >= 11 && saldo <= 20):
            return "Bronze"
        case (saldo >= 21 && saldo <= 50):
            return "Prata"
        case (saldo >= 51 && saldo <= 80):
            return "Ouro"
        case (saldo >= 81 && saldo <= 90):
            return "Diamante"
        case (saldo >= 91 && saldo <= 100):
            return "Lendário"
        case (saldo >= 101):
            return "Imortal"
        default:
            return "Indefinido"                        
    }
}