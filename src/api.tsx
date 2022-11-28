export async function fetchCoins() {
  const json = await (
    await fetch("https://api.coinpaprika.com/v1/coins")
  ).json();
  return json;
}
