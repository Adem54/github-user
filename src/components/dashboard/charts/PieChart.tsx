

// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { useSelector } from "react-redux";
import { selectReposByLanguage } from "../../../features/users/usersSlice";
import { chartConfigs, getFirstFiveData, getMostUsedData } from "../../../utils/charts";
import styles from "./chart.module.css";

// Resolves charts dependancy
charts(FusionCharts);


const PieChart = () => {
  const repos = useSelector(selectReposByLanguage);
  const chartData = getFirstFiveData(getMostUsedData(repos));
  const myChartConfigs = chartConfigs({
    type: "pie2d",
    caption: "Most Used",
  //   width: "100%",
  //  height: "350",
   
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

export default PieChart;

