import MainInfo from "../components/MainInfo";
import mainInfoData from "../assets/mainInfoData.json";
import Button from "../_share/button";
import Section from "../_share/Section/section.js";

const { costsMainInfo, incomesMainInfo, balanceMainInfo } = mainInfoData;
const MainPage = () => {
  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo btnTitle={"Add"} title="Расходы" dataMainInfo={costsMainInfo} />
      <MainInfo
        btnTitle={"Add"}
        title="Доходы"
        dataMainInfo={incomesMainInfo}
      />
      <MainInfo
        btnTitle={"ShowBalance"}
        title="Баланс"
        dataMainInfo={balanceMainInfo}
      />
      <Button title="Все расходы" />
      <Button title="Все доходы" />
    </Section>
  );
};

export default MainPage;
