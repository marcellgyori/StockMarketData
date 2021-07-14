export const addCard = (stockData) => {
    const container = document.getElementById('cards-container');
    const askPrice = stockData[0].regularMarketPrice;
    const currencryOfPrice = stockData[0].currency;
    const nameOfStock = stockData[0].longName;
    const dailyChange = stockData[0].regularMarketChange;
    const dailyChangePercent = stockData[0].regularMarketChangePercent;
    const styleForDailyChange = dailyChange>0 ? `style="color:green"` : `style="color:red"`;
    const preTagForDailyChange = dailyChange>0 ? '+' : '';
    container.insertAdjacentHTML('afterbegin', `
        <zizi-card title="${nameOfStock}">
            <div class="card-content">
                <div>${askPrice} ${currencryOfPrice}</div>
                <div ${styleForDailyChange}>${preTagForDailyChange}${dailyChange.toFixed(2)} ${currencryOfPrice} (${preTagForDailyChange}${dailyChangePercent.toFixed(2)}%)</div>
            </div>
        </zizi-card>
    `)
}