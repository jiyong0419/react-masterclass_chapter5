import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinChart } from "../api";
import ApexChart from "react-apexcharts";

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface IChartProps {
  coinId: string;
}
function Chart({ coinId }: IChartProps) {
  const { isLoading, data: priceData } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinChart(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          options={{
            chart: {
              height: 300,
              width: 300,
              toolbar: { show: false },
              background: "transparent",
            },
            theme: { mode: "dark" },
            stroke: { curve: "smooth", width: 4 },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: { labels: { show: false } },
          }}
          series={[
            {
              name: "Price",
              data: priceData?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
        />
      )}
    </div>
  );
}
export default Chart;
