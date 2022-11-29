const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const json = await (await fetch(`${BASE_URL}/coins`)).json();
  return json;
}

export async function fetchCoinInfo(coinId: string) {
  const json = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return json;
}

export async function fetchCoinPrice(coinId: string) {
  const json = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  return json;
}
