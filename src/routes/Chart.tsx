import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinChart } from "../api";

interface IChartProps {
  coinId: string;
}
function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinChart(coinId)
  );
  return <h1>Chart</h1>;
}
export default Chart;
