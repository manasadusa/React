import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import Cartlist from './Cartlist'
import CartTotal from './CartTotal'
export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
{value=>{
    const {cart}=value;
    if(cart.length>0){
        return(
            <React.Fragment>
<Title name="your" title="cart"/>
               <br />
               <CartColumns/>
               <Cartlist value={value}/>
               <CartTotal value={value}/>
            </React.Fragment>
        )
    }
    else{
            return (<EmptyCart/>);
    }
}}

            </ProductConsumer>
               
               
            
            </section>
        )
    }
}
