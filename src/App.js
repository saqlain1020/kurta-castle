import { Container } from "@material-ui/core";
import "./App.css";
import Navbar from "src/Components/Navbar/Navbar";
import Routes from "./Routes";
import TopBar from "src/Components/TopBar/TopBar";

function App() {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <TopBar/>
        <Navbar />
        <Routes />
      </Container>
    </>
  );
}

export default App;
