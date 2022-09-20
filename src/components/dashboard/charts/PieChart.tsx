import React, { CSSProperties } from "react";

import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { selectReposByLanguage } from "../../../features/users/usersSlice";
import { useSelector } from "react-redux";
import { getFirstFiveData, chartConfigs,getMostUsedData } from "../../../utils/charts";
import { getChartStyle } from "../../../utils/chartStyle";
import ReactFusioncharts from "react-fusioncharts";
import styles from "./chart.module.css";

// Resolves charts dependancy
charts(FusionCharts);
//* flex:0(flex-grow) 1(flex-shrink) 25%(flex-basis)*/
const style = getChartStyle("0 1 calc(40% - 1.8rem)");
/*
inline olarak, daha dogrusu direk degisken icinde style yazip kullanirken media-query islemlerinde
tikaniyoruz dolayisi ile bu yontemi kullanirken media-query islemlerini goz ardi etmemeliyiz..bu onemli...
*/

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
    //   <section className={[styles.chartItem,styles.pie].join(" ")}>
    // </section>
  );
};

export default PieChart;

/*
PieChart grafiginde uste bir label veya baslik eklemek istiyoruz 
ayrica, her bir dilim in oranini ok ile gostermek istiyoruz
bunun icin bizim chartjs-2 plugini olan Plugin Piechart Outlabels  bir 
plugin yuklememiz 

FusionChart kutuphanesini kullancacgiz...react-chartjs-2 den vazgectik
*/
