import { addCard } from "./cards";
import { loadData } from "./stock";

export const initForm = () => {
    const form = document.getElementById('form');
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit');
    const cardsContainer = document.getElementById('cards-container');
    form.addEventListener('submit', async e => {
    const stock = document.getElementById('stock-input').value;
    console.log(stock);
    e.preventDefault();
    submitButton.disabled = true;
    cardsContainer.insertAdjacentHTML('afterbegin', `<div id="loading-indicator" class="loader"></div>`);
    try {
        const stockData = await loadData(stock);
        addCard(stockData);
        form.reset();
    } catch {
        errorMessage.style.display = 'block';
        setTimeout(() => errorMessage.style.display = 'none', 2000);
    }
    submitButton.disabled = false;
    cardsContainer.removeChild(document.getElementById('loading-indicator'));
    });
}
