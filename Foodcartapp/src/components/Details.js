import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <DetailWrap>
            <ProductConsumer>
                {(value)=>{
                  const {id,company, info,price,title,inCart,img}=value.detailprod;
                return(
                    <div className="Details">
                       
                        <div className="image">
                            
                            <img src={img} alt="dish"/>
                            </div>
                            
                <div className="info">
                <h2>{title}</h2> 
                    <strong>Place:</strong>{company}
                <br />
                <strong>price:</strong>  Rs.{price} 
                <br />
               <p><strong>info:</strong>{info}</p> 
                </div>
                <div>
                    <Link to="/"><ButtonContainer>
                        Back to home
                        </ButtonContainer></Link>
                        
                    <Link to="/cart" style={{right:"10px"}}><ButtonContainer
                   disabled= {inCart?true:false}
                   onClick={()=>{
                    value.addToCart(id);
                   }
                    
                   }>
                        {inCart?"In Cart":"Add to Cart"}
                        </ButtonContainer></Link>
                </div>
                    
                    </div>
                
                )
                
                
                }}
                </ProductConsumer>
                </DetailWrap>
        );
    }
}

const DetailWrap=styled.div
`
.Details{
    text-align:center;
    font-size:1.5rem;
    padding:100px;
}
.image{
    float:left;
}
.info{
right:0;
}
`
