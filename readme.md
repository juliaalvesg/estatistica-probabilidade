QUESTÃO 01-
<--Calculadora de Estatísticas-->
Este é um conjunto de funções JavaScript para calcular estatísticas descritivas básicas de um conjunto de dados numéricos. Ele oferece funcionalidades para calcular a média, mediana, moda, variância, desvio padrão e coeficiente de variação, além de representar os dados em um histograma.

<--Como usar-->
Funções de Cálculo de Estatísticas:
calcularMedia(data): Calcula a média dos dados fornecidos.
calcularMediana(data): Calcula a mediana dos dados fornecidos.
calcularModa(data): Calcula a moda (valor mais frequente) dos dados fornecidos.
calcularVariancia(data, mean): Calcula a variância dos dados fornecidos, exigindo a média como parâmetro.
calcularDesvioPadrao(variance): Calcula o desvio padrão a partir da variância fornecida.
calcularCoeficienteVariacao(standardDeviation, mean): Calcula o coeficiente de variação com base no desvio padrão e na média.

<--Funcionalidade de Execução:-->
calcularEstatisticas(): Obtém dados de entrada do usuário, executa os cálculos estatísticos e exibe os resultados na página.

<--Como executar-->
Adicione uma entrada de dados separada por vírgulas no elemento HTML com o ID data-input.
Chame a função calcularEstatisticas() para calcular e exibir as estatísticas na página.

<--Limitações-->
A amostra de entrada não pode ter mais de 100 observações para evitar problemas de desempenho.
Valores não numéricos não serão aceitos como entrada. Certifique-se de fornecer valores numéricos separados por vírgula.

<--Representação Visual dos Dados-->
A função desenharHistograma(data) cria um histograma para visualizar a distribuição dos dados em intervalos.
O eixo x representa os intervalos dos dados.
O eixo y representa a frequência dos valores dentro desses intervalos.

<--Dependências-->
Este código utiliza a biblioteca Chart.js para desenhar o histograma. Certifique-se de incluir essa biblioteca em sua página para visualizar o histograma.

QUESTÃO 02-
<--Calculadora de Combinatória-->
Esta é uma calculadora de combinatória em JavaScript que fornece cálculos para Permutação, Arranjo e Combinação, tanto com quanto sem repetição.

<--Como Usar-->
Entrada de Dados:Insira os valores de n e r nos campos correspondentes no HTML.
Cálculos Disponíveis:
Permutação Simples: Calcula a permutação simples (n!).
Arranjo Simples: Calcula o arranjo simples (nPr).
Combinação Simples: Calcula a combinação simples (nCr).
Permutação com Repetição: Calcula a permutação com repetição (n^r).
Arranjo com Repetição: Calcula o arranjo com repetição.
Combinação com Repetição: Calcula a combinação com repetição.

<--Funções Disponíveis:-->
permutacaoSimples(n): Calcula a permutação simples.
arranjoSimples(n, r): Calcula o arranjo simples.
combinacaoSimples(n, r): Calcula a combinação simples.
permutacaoRepeticao(n, r): Calcula a permutação com repetição.
arranjoRepeticao(n, r): Calcula o arranjo com repetição.
combinacaoRepeticao(n, r): Calcula a combinação com repetição.
fatorial(num): Calcula o fatorial de um número.
Executando os Cálculos
Chame a função calcular() para realizar os cálculos com os valores inseridos nos campos n e r do HTML.
Os resultados serão exibidos nos elementos correspondentes do HTML.

<--Observações-->
Certifique-se de fornecer valores inteiros para n e r.
A função fatorial() é usada para cálculos internos e não é necessário chamar diretamente.

<--Notas de Implementação-->
Este código utiliza a função de fatorial para realizar os cálculos de permutação, arranjo e combinação.
A lógica para cálculos com repetição é baseada em fórmulas específicas para esses casos.