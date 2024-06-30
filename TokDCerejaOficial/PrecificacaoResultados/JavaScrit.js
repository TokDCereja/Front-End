function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuButton = document.querySelector('.mobile-menu-icon button');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Ícone de menu
    } else {
        menuMobile.classList.add('open');
        menuButton.innerHTML = '<i class="fa-solid fa-x"></i>'; // Ícone de fechar
    }
}

// calculo//

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos de input e output
    var precoCustoInput = document.getElementById('precoCustoInput');
    var rendimentoInput = document.getElementById('rendimentoInput');
    var custoEmbalagemInput = document.getElementById('custoEmbalagemInput');
    var outrasDespesasInput = document.getElementById('outrasDespesasInput');
    var maoDeObraInput = document.getElementById('maoDeObraInput');
    var lucroInput = document.getElementById('lucroInput');
    var totalReceitaOutput = document.getElementById('totalReceitaOutput');
    var vendaRendimentoOutput = document.getElementById('vendaRendimentoOutput');
    
    // Função para calcular os valores
    function calcularPrecificacao() {
        // Obtém os valores dos inputs e converte para números
        var precoCusto = parseFloat(precoCustoInput.value);
        var rendimento = parseFloat(rendimentoInput.value);
        var custoEmbalagem = parseFloat(custoEmbalagemInput.value);
        var outrasDespesas = parseFloat(outrasDespesasInput.value) / 100; // Convertido para decimal
        var maoDeObra = parseFloat(maoDeObraInput.value) / 100; // Convertido para decimal
        var lucro = parseFloat(lucroInput.value) / 100; // Convertido para decimal
        
        // Calcula o preço de custo com outras despesas
        var precoCustoComDespesas = precoCusto * (1 + outrasDespesas);
        
        // Calcula a mão de obra como uma porcentagem do preço de custo com despesas
        var valorMaoDeObra =precoCusto * (1 + outrasDespesas);
        
        // Calcula o lucro como uma porcentagem do preço de custo com despesas
        var valorLucro = precoCusto * (1 + outrasDespesas);
        
        // Calcula o subtotal somando mão de obra, lucro e custo da embalagem
        var totalReceita  = precoCustoComDespesas + valorMaoDeObra + valorLucro + custoEmbalagem ;
        
        
        
        // Calcula o valor de venda por rendimento
        var vendaPorRendimento = totalReceita / rendimento;
        
        // Atualiza os outputs com os resultados formatados
        totalReceitaOutput.textContent = totalReceita.toFixed(2);
        vendaRendimentoOutput.textContent = vendaPorRendimento.toFixed(2);
    }
    
    // Atualiza os valores ao carregar a página e quando os inputs mudam
    calcularPrecificacao();
    
    precoCustoInput.addEventListener('input', calcularPrecificacao);
    rendimentoInput.addEventListener('input', calcularPrecificacao);
    custoEmbalagemInput.addEventListener('input', calcularPrecificacao);
    outrasDespesasInput.addEventListener('input', calcularPrecificacao);
    maoDeObraInput.addEventListener('input', calcularPrecificacao);
    lucroInput.addEventListener('input', calcularPrecificacao);
});
