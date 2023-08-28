import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import Login from "./routes/Login/Login";
import NotFound from "./routes/NotFound/NotFound";
import Header from "./components/Header";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<HomePage />} />   
      <Route path="/login" element={<Login />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}