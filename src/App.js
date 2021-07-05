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
        <div
          style={{ minHeight: "100vh", display: "flex", flexFlow: "column" }}
        >
          <TopBar />
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default App;
