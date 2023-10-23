

document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    
    calcularButton.addEventListener("click", calcularRendimento);

    function calcularRendimento() {
        const investimento = parseFloat(document.getElementById("investimento").value);
        const tempo = parseInt(document.getElementById("tempo").value);
        const taxaPoupanca = 0.03; // Taxa de rendimento da Poupança (exemplo)
        const taxaCDB = 0.05; // Taxa de rendimento do CDB (exemplo)

        const rendimentoPoupanca = investimento * Math.pow(1 + taxaPoupanca, tempo);
        const rendimentoCDB = investimento * Math.pow(1 + taxaCDB, tempo);

        document.getElementById("rendimentoPoupanca").textContent = rendimentoPoupanca.toFixed(2);
        document.getElementById("rendimentoCDB").textContent = rendimentoCDB.toFixed(2);
    }
});

