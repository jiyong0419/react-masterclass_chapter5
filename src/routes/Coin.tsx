import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

interface ICoin {
  coinId: string;
}
interface IState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<ICoin>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<IState>();
  const [coinInfo, setCoinInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      const coinData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setCoinInfo(coinData);
      setPriceInfo(priceData);
    })();
  }, [coinId]);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
