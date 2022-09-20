import { CSSProperties } from "react";
import DoughNutChart from "./DoughNutChart";
import HorizontalBarChart from "./HorizontalBarChart";
import PieChart from "./PieChart";
import VerticalBarChart from "./VerticalBarChart";
import styles from "./chart.module.css";
//import styles from "./search.module.css";

//style lar tanimlanirken typescriptte ya bu sekilde tanimlariz ya da direk any yapar geceriz
const style: CSSProperties | undefined = {
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  marginBottom: "4rem",
};

const Charts = () => {
  return (
    <>
      <section className={styles.chartsContent}>
        <PieChart />
        <VerticalBarChart />
      </section>
      <section className={styles.chartsContent}>
        <DoughNutChart />
        <HorizontalBarChart />
      </section>
    </>
  );
};

export default Charts;
/*
 display: flex;
   
    width: 70%;
    flex-wrap:wrap;
    margin-bottom: 4rem;

*/
