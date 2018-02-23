'use strict';

const fetch = require('node-fetch');

function _normalizeCoin(item) {
  const obj = {
    id: item.Id,
    name: item.Name,
    imageUrl: item.ImageUrl,
    coinName: item.CoinName,
    totalCoinSupply: item.TotalCoinSupply,
    algorithm: item.Algorithm
  };

  if (obj.imageUrl) {
    obj.imageUrl = `https://www.cryptocompare.com/${obj.imageUrl}`;
  }

  return obj;
}

let _cache;
async function handler() {
  if (_cache) return _cache;
  const url = 'https://min-api.cryptocompare.com/data/all/coinlist';
  const response = await fetch(url);
  const json = await response.json();
  const data = json.Data;
  const coinlist = Object.keys(data).map(key => _normalizeCoin(data[key]));
  _cache = { coinlist, metadata: { size: coinlist.length } };
  return { coinlist };
}

module.exports = {
  handler
};
