function calcular() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);
  
    const resultadoPermutacaoSimples = document.getElementById('resultadoPermutacaoSimples');
    const resultadoArranjoSimples = document.getElementById('resultadoArranjoSimples');
    const resultadoCombinaçãoSimples = document.getElementById('resultadoCombinaçãoSimples');
    const resultadoPermutacaoRepeticao = document.getElementById('resultadoPermutacaoRepeticao');
    const resultadoArranjoRepeticao = document.getElementById('resultadoArranjoRepeticao');
    const resultadoCombinaçãoRepeticao = document.getElementById('resultadoCombinaçãoRepeticao');
  
    resultadoPermutacaoSimples.textContent = `Permutação Simples: ${permutacaoSimples(n)}`;
    resultadoArranjoSimples.textContent = `Arranjo Simples: ${arranjoSimples(n, r)}`;
    resultadoCombinaçãoSimples.textContent = `Combinação Simples: ${combinacaoSimples(n, r)}`;
    resultadoPermutacaoRepeticao.textContent = `Permutação com Repetição: ${permutacaoRepeticao(n, r)}`;
    resultadoArranjoRepeticao.textContent = `Arranjo com Repetição: ${arranjoRepeticao(n, r)}`;
    resultadoCombinaçãoRepeticao.textContent = `Combinação com Repetição: ${combinacaoRepeticao(n, r)}`;

  }
  
  function permutacaoSimples(n) {
    return fatorial(n);
  }
  
  function arranjoSimples(n, r) {
    return fatorial(n) / fatorial(n - r);
  }
  
  function combinacaoSimples(n, r) {
    return fatorial(n) / (fatorial(r) * fatorial(n - r));
  }
  
  function permutacaoRepeticao(n, r) {
    return n ** r;
  }
  
  function arranjoRepeticao(n, r) {
    return fatorial(n + r - 1) / (fatorial(r) * fatorial(n - 1));
  }
  
  function combinacaoRepeticao(n, r) {
    return fatorial(n + r - 1) / (fatorial(r) * fatorial(n - 1));
  }
  
  function fatorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }
  