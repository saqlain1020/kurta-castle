import { Container } from "@material-ui/core";
import "./App.css";
import Navbar from "src/Components/Navbar/Navbar";
import Routes from "./Routes";
import TopBar from "src/Components/TopBar/TopBar";
import Footer from "src/Components/Footer/Footer";

function App() {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        {/* <TopBar/> */}
        <Navbar />
        <Routes />
        <Footer/>
      </Container>
    </>
  );
}

export default App;
