import Button from "../_share/button.js";
import css from "./Maininfo.module.css";

const MainInfo = ({ dataMainInfo, title, btnTitle }) => {
  return (
    <section className={css.container}>
      <h2>{title}</h2>
      <p>UAH</p>
      <ul>
        {dataMainInfo.map((el) => (
          <li key={el.period}>
            <span>{el.period}</span>
            <span>{el.total}</span>
          </li>
        ))}
      </ul>
      <Button title={btnTitle} />
    </section>
  );
};

export default MainInfo;
