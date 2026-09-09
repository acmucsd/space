import s from "./style.module.scss";

const statistics = [
  { label: "Students", value: "250+" },
  { label: "Companies", value: 2 },
];

const StatisticsGrid: React.FC = () => {
  return (
    <div className={s.container}>
      {statistics.map((stat, index) => (
        <div className={s.pill} key={index}>
          {stat.value} {stat.label}
        </div>
      ))}
    </div>
  );
};

export default StatisticsGrid;
