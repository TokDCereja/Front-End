document.addEventListener('DOMContentLoaded', function() {
    const planSelect = document.getElementById('plan');
    const valueInput = document.getElementById('value');
    const paymentTypeSelect = document.getElementById('payment-type');
    const installmentsGroup = document.getElementById('installments-group');

    // Definindo o tipo de pagamento inicial
    paymentTypeSelect.value = 'debit'; // Débito selecionado por padrão
    installmentsGroup.style.display = 'none'; // Oculta inicialmente o campo de parcelas

    // Atualiza o valor automaticamente quando o plano é selecionado
    planSelect.addEventListener('change', function() {
        updateValue();
    });

    // Mostra ou esconde o campo de parcelas baseado no tipo de pagamento selecionado
    paymentTypeSelect.addEventListener('change', function() {
        if (paymentTypeSelect.value === 'credit') {
            installmentsGroup.style.display = 'block';
        } else {
            installmentsGroup.style.display = 'none';
        }
    });

    // Define o valor inicial baseado no plano selecionado
    updateValue();

    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const value = document.getElementById('value').value;
        const plan = document.getElementById('plan').value;
        const paymentType = document.getElementById('payment-type').value;
        const installments = paymentType === 'credit' ? document.getElementById('installments').value : '1';
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Validação simples
        if (!name || !value || !plan || !paymentType || !cardNumber || !expiryDate || !cvv) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Pagamento realizado com sucesso!');
    });

    function updateValue() {
        const selectedPlanValue = planSelect.value;
        valueInput.value = `R$ ${selectedPlanValue},00`;
    }
});
