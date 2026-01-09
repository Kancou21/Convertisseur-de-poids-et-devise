const devises1 = document.getElementById('devises1');

const montant1 = document.getElementById('montant1');

const devises2 = document.getElementById('devises2');

const montant2 = document.getElementById('montant2');

function updateRate() {
const devises1 = document.getElementById('devises1');
 fetch(`https://v6.exchangerate-api.com/v6/b234998b31a8fd5ea6755a2e/latest/${devises1.value}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates
        [devises2.value];
        console.log(rate);

        montant2.value = (montant1.value * rate).toFixed(2);
    });
}    

devises1.addEventListener('change', updateRate);

devises2.addEventListener('change', updateRate);

montant1.addEventListener('input', updateRate);

montant2.addEventListener('input', updateRate);
