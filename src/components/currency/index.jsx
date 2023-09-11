import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('usd');
  const [result, setResult] = useState('');

  const exchangeRates = {
    usd: {
      eur: 0.85,
      gbp: 0.75,
      idr: 14300,
    },
    eur: {
      usd: 1.18,
      gbp: 0.89,
      idr: 16859.5,
    },
    gbp: {
      usd: 1.33,
      eur: 1.12,
      idr: 19066.67,
    },
    idr: {
      usd: 0.00007,
      eur: 0.000059,
      gbp: 0.000052,
    },
  };

  const convertCurrency = () => {
    if (isNaN(amount)) {
      alert('Masukkan jumlah yang valid.');
      return;
    }

    if (
      !(fromCurrency in exchangeRates) ||
      !(toCurrency in exchangeRates[fromCurrency])
    ) {
      alert('Mata uang tidak valid.');
      return;
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    setResult(`${convertedAmount} ${toCurrency.toUpperCase()}`);
  };

  return (
    <div className="converter">
      <h1>Konversi Mata Uang</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Masukkan jumlah"
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="idr">IDR</option>
      </select>
      <span>ke</span>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="idr">IDR</option>
      </select>
      <button onClick={convertCurrency}>Konversi</button>
      <p>
        Hasil: <span id="result">{result}</span>
      </p>
    </div>
  );
}

export default CurrencyConverter;
