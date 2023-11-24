// Função para calcular estatísticas
function calcularMedia(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
  
  function calcularMediana(data) {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
  
  function calcularModa(data) {
    const occurrences = {};
    data.forEach(num => {
      occurrences[num] = (occurrences[num] || 0) + 1;
    });
  
    let maxFrequencia = 0;
    let modes = [];
    for (const num in occurrences) {
      if (occurrences[num] > maxFrequencia) {
        maxFrequencia = occurrences[num];
        modes = [parseFloat(num)];
      } else if (occurrences[num] === maxFrequencia) {
        modes.push(parseFloat(num));
      }
    }
  
    return modes.join(', ');
  }
  
  function calcularVariancia(data, mean) {
    const squaredDifferences = data.map(num => Math.pow(num - mean, 2));
    return calcularMedia(squaredDifferences);
  }
  
  function calcularDesvioPadrao(variance) {
    return Math.sqrt(variance);
  }
  
  function calcularCoeficienteVariacao(standardDeviation, mean) {
    return (standardDeviation / mean) * 100;
  }
  
  function calcularEstatisticas() {
    const inputData = document.getElementById('data-input').value;
    const data = inputData.split(',').map(num => parseFloat(num.trim()));
  
    if (data.some(isNaN)) {
      alert('Insira valores numéricos válidos separados por vírgula.');
      return;
    }
  
    if (data.length > 100) {
      alert('A amostra não pode ter mais de 100 observações.');
      return;
    }
  
    const mean = calcularMedia(data);
    const median = calcularMediana(data);
    const mode = calcularModa(data);
    const variance = calcularVariancia(data, mean);
    const standardDeviation = calcularDesvioPadrao(variance);
    const coefficientOfVariation = calcularCoeficienteVariacao(standardDeviation, mean);
  
    exibirResultados(mean, median, mode, variance, standardDeviation, coefficientOfVariation);
    desenharHistograma(data);
  }
  
  function exibirResultados(mean, median, mode, variance, standardDeviation, coefficientOfVariation) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h2>Resultados:</h2>
      <p><strong>Média:</strong> ${mean}</p>
      <p><strong>Mediana:</strong> ${median}</p>
      <p><strong>Moda:</strong> ${mode}</p>
      <p><strong>Variância:</strong> ${variance}</p>
      <p><strong>Desvio Padrão:</strong> ${standardDeviation}</p>
      <p><strong>Coeficiente de Variação:</strong> ${coefficientOfVariation.toFixed(2)}%</p>
    `;
  }
  
  function desenharHistograma(data) {
    const canvas = document.getElementById('histogram');
  
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const binWidth = (maxValue - minValue) / 5; 
  
    const frequencia = Array.from({ length: 6 }, () => 0); 
  
    data.forEach(num => {
      const binIndex = Math.floor((num - minValue) / binWidth);
      if (binIndex >= 0 && binIndex < 5) {
        frequencia[binIndex]++;
      } else if (binIndex === 5) {
        frequencia[5]++; 
      }
    });
  
    canvas.width = 680; 
    canvas.height = 480; 
  
    const ctx = canvas.getContext('2d');
  
    const dataPoints = frequencia.map((val, index) => ({
      x: minValue + index * binWidth,
      y: val
    }));
  
    new Chart(ctx, {
      type: 'bar', // Tipo de gráfico de barras
      data: {
        labels: dataPoints.map((point, index) => `${point.x.toFixed(2)} - ${(point.x + binWidth).toFixed(2)}`),
        datasets: [{
          label: 'Frequência',
          data: dataPoints.map(point => point.y),
          backgroundColor: 'skyblue'
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Intervalos'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Frequência'
            }
          }
        }
      }
    });
  }
  
  
  
  