import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from '../Components/Cart'
import ProductList from '../Components/ProductList'

export default function AllRoutes() {
  return (
    <>
    <Routes>
     <Route path='/' element={<ProductList/>}/>
     <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}