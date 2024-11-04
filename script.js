// Currency conversion rates
const conversionRates = {
    INR: 84.07,
    JPY: 149.34
};

// Elements
const billTotalInput = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentDisplay = document.getElementById('tipPercent');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');
const currencySelect = document.getElementById('currency');
const errorMessage = document.getElementById('errorMessage');

// Function to update the tip and total values
function updateValues() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercent = parseFloat(tipSlider.value);
    const currency = currencySelect.value;

    // Validation
    if (isNaN(billTotal) || billTotal <= 0) {
        errorMessage.textContent = 'Please enter a valid positive number for the bill total.';
        tipAmountInput.value = '';
        totalWithTipInput.value = '';
        return;
    } else {
        errorMessage.textContent = '';
    }

    // Calculate tip and total
    const tipAmountUSD = (billTotal * tipPercent) / 100;
    const totalWithTipUSD = billTotal + tipAmountUSD;

    // Convert to selected currency
    const conversionRate = conversionRates[currency];
    const tipAmount = (tipAmountUSD * conversionRate).toFixed(2);
    const totalWithTip = (totalWithTipUSD * conversionRate).toFixed(2);

    // Update display
    tipPercentDisplay.textContent = `${tipPercent}%`;
    tipAmountInput.value = `${tipAmount}`;
    totalWithTipInput.value = `${totalWithTip}`;
}

// Event listeners
billTotalInput.addEventListener('input', updateValues);
tipSlider.addEventListener('input', updateValues);
currencySelect.addEventListener('change', updateValues);
