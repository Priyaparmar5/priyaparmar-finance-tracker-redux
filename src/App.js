import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTransaction from "../src/pages/AddTransaction";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/table' element={<Table/>}></Route>
          <Route path="/" element={<AddTransaction />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
