import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTransaction from "../src/pages/AddTransaction";
import Table from "./pages/Table";
import ViewData from "./pages/ViewData";
import ViewDetail from "./pages/ViewDetail";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/ViewData' element={<ViewData/>}></Route>
          <Route path='/table' element={<Table/>}></Route>
          <Route path='/view' element={<ViewDetail/>}></Route>
          <Route path="/add" element={<AddTransaction />}></Route>
          <Route path="/add/:id" element={<AddTransaction />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
