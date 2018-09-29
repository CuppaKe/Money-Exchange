/**
 * Function determine the minimum number of coins to exchange currency
 * @param {number} currency given currency
 * @return {object} minimum number of coins or error message
 */
module.exports = function makeExchange(currency) {
  const coins = {};
  const rich = { error: "You are rich, my friend! We don't have so much coins for exchange" };
  let cash = currency;
  
  if (cash > 10000) return rich;
  if (cash <= 0) return coins;
  if (cash >= 50) {
    coins.H = Math.floor(cash / 50);
    cash -= coins.H * 50;
  }
  if (cash >= 25) {
    coins.Q = Math.floor(cash / 25);
    cash -= coins.Q * 25;
  }
  if (cash >= 10) {
    coins.D = Math.floor(cash / 10);
    cash -= coins.D * 10;
  }
  if (cash >= 5) {
    coins.N = Math.floor(cash / 5);
    cash -= coins.N * 5;
  }
  if (cash >= 1) {
    coins.P = Math.floor(cash / 1);
  }
  return coins;
};
