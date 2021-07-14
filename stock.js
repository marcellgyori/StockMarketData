export const loadData = async (stock) => {
    try {
        const stockInfo = getStockInfo(stock);
        console.log(stockInfo);
        return stockInfo;
    } catch (e) {
        console.error('Error loading stock data', e);
        throw e;
    }
}


const getStockInfo = async (stock) => {
    const apikey = "T74ICkIXcYydEQrcRVFTCrNhXBYdZCjW4tW2B44QlftzxzSn2hVaN3wrXFOM";
    const demoKey = "demo";
    const response = await fetch(`https://mboum.com/api/v1/qu/quote/?symbol=${stock}&apikey=${apikey}`, 
    {
        method: 'GET'
    });

    const jsonResponse = await response.json();
    return jsonResponse;
}
