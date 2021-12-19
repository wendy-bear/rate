import "./App.css";
import Rate from "./components/tarif";

function App() {
  return (
    <>
      <Rate
        title="Безлимитный 300"
        price="300"
        speed="До 10 Мбит/сек."
        description="Объем включенного трафика не ограничен"
        isRate300={true}
        isRate450={false}
        isRate550={false}
        isRate1000={false}
      ></Rate>
      <Rate
        title="Безлимитный 450"
        price="450"
        speed="До 50 Мбит/сек."
        description="Объем включенного трафика не ограничен"
        isRate300={false}
        isRate450={true}
        isRate550={false}
        isRate1000={false}
      ></Rate>
      <Rate
        title="Безлимитный 550"
        price="550"
        speed="До 100 Мбит/сек."
        description="Объем включенного трафика не ограничен"
        isRate300={false}
        isRate450={false}
        isRate550={true}
        isRate1000={false}
        isSelected={true}
      ></Rate>
      <Rate
        title="Безлимитный 1000"
        price="1000"
        speed="До 200 Мбит/сек."
        description="Объем включенного трафика не ограничен"
        isRate300={false}
        isRate450={false}
        isRate550={false}
        isRate1000={true}
      ></Rate>
    </>
  );
}

export default App;
