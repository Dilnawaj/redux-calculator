import "./App.css";
import Container from "./components/container";
import Content from "./components/Content";
import Header from "./components/Header";
import Operation from "./components/Operation";

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Operation />
    </Container>
  );
}

export default App;
