const API_URL = "https://open.er-api.com/v6/latest";

async function CurrencyConvert(req,res) {
    const {value,currency,to_currency} = req.query;

    // Basic validation
    // value should be a non-negative number. Required Field.
    // currency should be a 3 letter string. Required Field.
    // to_currency should be a 3 letter string. Required Field.
    if (!value || isNaN(value) || Number(value) < 0) { 
        return res.status(400).json({message:"Incomplete or Incorrect data passed"});
    }
    if (!currency || currency.length !== 3) {
        return res.status(400).json({message:"Incomplete or Incorrect data passed"});
    }
    if (!to_currency || to_currency.length !== 3) {
        return res.status(400).json({message:"Incomplete or Incorrect data passed"});
    }

    // check if currency and to_currency are same
    if (currency === to_currency) {
        return res.status(200).json({converted_value: Number(value)});
    }

    // Fetch exchange rates from external API
    // 404 (Not Found) if the currency code could not be found in the API and JSON - {”message”: “Cannot find given currency code”}
    // 500 (Internal Server Error) if cannot call external API or any other error) and JSON - {”message” : “The service is currently down, please check again later”}

    try {
        const response  = await fetch(`${API_URL}/${currency}`);
        const data = response.json();

        if (!data || !data.rates) {
            return res.status(500).json({message:"The service is currently down, please check again later"});
        }
        if (!data.rates[to_currency]) {
            return res.status(404).json({message:"Cannot find given currency code"});
        }   
        const rate = data.rates[to_currency];
        const converted_value = Number(value) * rate;
        return res.status(200).json({converted_value});
        
    }catch (error) {
        console.error("Fetch error:", error.message);
        return res.status(500).json({message:"The service is currently down, please check again later"});
    }
}

module.exports = { CurrencyConvert };