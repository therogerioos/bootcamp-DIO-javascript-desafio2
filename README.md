# Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro <br>
Se vitórias for entre 11 e 20 = Bronze <br>
Se vitórias for entre 21 e 50 = Prata <br>
Se vitórias for entre 51 e 80 = Ouro <br>
Se vitórias for entre 81 e 90 = Diamante <br>
Se vitórias for entre 91 e 100= Lendário <br>
Se vitórias for maior ou igual a 101 = Imortal <br>

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
## Comentários da solução de Rogerio Oliveira

Defini duas variáveis, uma para as vitórias, e outra para as derrotas. Esse tipo de contador servirá para modularizar com dados de um banco de dados.

Em seguida, criei duas funções:

__function *saldoRankeadas*__ - Realiza a verificação do saldo entre a subtração de vitórias e derrotas.

__function *verificarRanking*__ - Com o __*switch case*__, verificar através de comparador lógico, qual o status da rankeado do jogador.

Com isso, utilizei o __*return*__ para devolver o saldo das rankeadas e o status do ranking.
  
Por fim, exibirá na tela com __*console.log()*__, a frase do enunciado.

Bons estudos 😉