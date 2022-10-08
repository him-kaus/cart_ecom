import React,{useState} from 'react'
import './product.css'
import products from './products.json'
import {useCart} from 'react-use-cart'
import Header from './Header'

const Product_page = () => {
    const {addItem} = useCart();

   
   
    return (
        <>
        
            <h1 className='heading'>Product - Page</h1>
            <Header />
            {
                products.map((ele, index) => {
                    return (
                        <div className='container mt-3'>
                            <div class="card side" style={{ width: '18rem' }}>
                                <img src={ele.img} style={{height:'179px'}} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{ele.title}</h5>
                                    <p class="card-text">Price : <b>$</b><h2>{ele.price}</h2></p>
                                    <a href="#" class="btn btn-primary m-2">About</a>
                                    <a href="#" class="btn btn-success m-2" onClick={()=>addItem(ele)}>Add To Cart</a>
                                  
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </>
    )
}

export default Product_page