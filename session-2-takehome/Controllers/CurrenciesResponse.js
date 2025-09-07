
const API_URL = "https://open.er-api.com/v6/latest/USD";
const currencyData = require('../Data/CurrencyData');

const getCurrencies = async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!data || !data.rates) {
      return res.status(500).json({
        message: "Invalid response from currency API",
      });
    }

    const currencies = Object.keys(data.rates);

    res.status(200).json({ source: "live",data: currencies });
  } catch (error) {

    console.warn("⚠️ External API failed, using local data...", error.message);

    try {
        const localCurrencyData = Object.keys(currencyData.rates);
        res.status(200).json({ source: "local", data: localCurrencyData });

    } catch (error) {
         console.error("Fetch error:", error.message);
        res.status(500).json({
            message: "The service is currently down, please check again later",
        });
    }

  }
};

module.exports = { getCurrencies };
