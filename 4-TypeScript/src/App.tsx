import Card, { CardVariant } from "./components/Card";

export default function App() {
  return (
    <>
      <Card width="200px" height="200px" variant={CardVariant.colorFone}>
        <button>Кнопка</button>
      </Card>

      <button>Button</button>
    </>
  );
}
