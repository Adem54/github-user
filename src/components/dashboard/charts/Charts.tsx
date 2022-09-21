import styles from "./chart.module.css";
import DoughNutChart from "./DoughNutChart";
import HorizontalBarChart from "./HorizontalBarChart";
import PieChart from "./PieChart";
import VerticalBarChart from "./VerticalBarChart";


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

