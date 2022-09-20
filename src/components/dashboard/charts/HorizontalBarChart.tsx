// STEP 1 - Include Dependencies
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { selectReposByRepoName } from "../../../features/users/usersSlice";
import { useSelector } from "react-redux";
import { getFirstFiveData, colors, chartConfigs,getMostForkedRepoNames } from "../../../utils/charts";
import { getChartStyle } from "../../../utils/chartStyle";
import ReactFusioncharts from 'react-fusioncharts';
import styles from "./chart.module.css";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const style = getChartStyle("0 1 calc(60% - 3rem)");
const HorizontalBarChart = () => {
  const repos = useSelector(selectReposByRepoName);
  const chartData = getFirstFiveData(getMostForkedRepoNames(repos),colors);
  const myChartConfigs = chartConfigs({
    type: "bar2d",
    caption: "Most Forked",
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

export default HorizontalBarChart;
