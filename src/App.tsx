import "./App.css";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome message="Hello!" />
      <Header logoText="My First React App" />
      <Info firstname="Koichi" lastname="Kimura" age={28} isStudent />
    </>
  );
}

export default App;
