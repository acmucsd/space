import s from "./style.module.scss";

const statistics = [
  { label: "Students", value: "250+" },
  { label: "Companies", value: 2 },
];

const StatisticsGrid: React.FC = () => {
  return (
    <div className={s.container}>
      {statistics.map((stat, index) => (
        <div className={s.item} key={index}>
          <h1>{stat.value}</h1>
          <h3>{stat.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatisticsGrid;
