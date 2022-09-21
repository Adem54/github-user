// STEP 1 - Include Dependencies
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFusioncharts from "react-fusioncharts";
import { useSelector } from "react-redux";
import { selectReposByRepoName } from "../../../features/users/usersSlice";
import { chartConfigs, colors, getFirstFiveData, getMostStarredRepoNames } from "../../../utils/charts";
import styles from "./chart.module.css";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const VerticalBarChart = () => {
const repos = useSelector(selectReposByRepoName);
const chartData = getFirstFiveData(getMostStarredRepoNames(repos),colors);

  const myChartConfigs = chartConfigs({
    type: "column2d",
    caption: "Most Starred",
    chartData,
  });

  return (
      <section className={[styles.chartItem,styles.verticalBarChart].join(" ")}>
      <ReactFusioncharts 
      {...myChartConfigs}
      />
    </section>
  );
};

export default VerticalBarChart;
