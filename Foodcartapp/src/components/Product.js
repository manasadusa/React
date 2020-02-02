import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types';

import img1 from '../product-1.jpg'
export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <div>
               <Productwrap>
                    <div className="card">
                        <ProductConsumer>
                            {(value)=> (
                                <div className="img-container" onClick={()=>value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>
                                <button className="cart-btn" disabled={inCart?true:false} onClick={()=>value.addToCart(id)}>
                                {inCart?(<p>
                                    incart
                                </p>):(<h5>Cart</h5>)}
                              
                                </button>
                                </div>
                            )}
                        
                        </ProductConsumer>
                        <div className="detailsHeader">  {title}
         <span className="price">Price:  Rs. {price}</span>
                        </div> 
                    </div>
                    
                
                </Productwrap>
            </div>
        )
    } 
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,

    }).isRequired
};

const Productwrap=styled.div
`
.card{
    fontsize:20;
    background:transparent;
    border-color:transparent;
}
.img-container{
    position:relative;
    padding:20px;
    overflow:hidden;
}
.card-img-top{
width:350px;
height:auto;
padding:30px;

}
.cart-btn{
 position:absolute;
bottom:0;
right:0;
background:lightblue;

}
.detailsHeader{
    padding:10px;
    align-text:center;
    position:relative;

}

.price{
    
    right:0;
    
    position:absolute;
}


&:hover{
    .card{
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}

`
