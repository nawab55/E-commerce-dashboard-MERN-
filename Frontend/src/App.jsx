import Nav from "./components/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import SignUp from "./components/SignUp"
import PrivateComponent from "./components/PrivateComponent"
import Login from "./components/Login"
import AddProduct from "./components/addProduct"
import ProductList from "./components/ProductList"
import UpdateProduct from "./components/UpdateProduct"


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/logout" element={<h1>Logout Compont</h1>} />
        <Route path="/profile" element={<h1>Profile Compont</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
