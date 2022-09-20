import React, { CSSProperties } from "react";
// STEP 1 - Include Dependencies
// Include react
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { selectReposByLanguage } from "../../../features/users/usersSlice";
import { useSelector } from "react-redux";
import { getFirstFiveData, chartConfigs,getMostPopularData } from "../../../utils/charts";
import { getChartStyle } from "../../../utils/chartStyle";
import ReactFusioncharts from 'react-fusioncharts';
import styles from "./chart.module.css";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const style = getChartStyle("0 1 calc(40% - 1.8rem)");

const DoughNutChart = () => {
  const repos = useSelector(selectReposByLanguage);
  const chartData = getFirstFiveData(getMostPopularData(repos));
  const myChartConfigs = chartConfigs({
    type: "doughnut2d",
    caption: "Most Popular",
    chartData,
  });

  return (
    <section className={[styles.chartItem,styles.pie].join(" ")}>
      <ReactFusioncharts 
      {...myChartConfigs}
      />
    </section>
  );
};

export default DoughNutChart;
