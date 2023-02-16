import "./App.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import productTent from "./productTent.js";
import Card from "./components/Card.js";
import Detail from "./pages/Detail.js";
import Header from "./components/Header.js";
import Bgimgs from "./components/Bgimgs";
import Bbq from "./pages/Bbq.js";
import Chair from "./pages/Chair.js";
import SleepingBag from "./pages/SleepingBag.js";
import Table from "./pages/Table.js";
import Tent from "./pages/Tent.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  let [tent, setTent] = useState(productTent);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Bgimgs />
              <div className="title">
                <h1>Tent</h1>
              </div>
              <Container>
                <Row>
                  {tent.map((a, i) => {
                    return <Card tent={tent[i]} i={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail tent={tent} />} />
        <Route path="/bbq" element={<Bbq />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/sleepingbag" element={<SleepingBag />} />
        <Route path="/table" element={<Table />} />
        <Route path="/tent" element={<Tent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
