import React from 'react'
import {ButtonContainer} from '../Button'
import {Link} from 'react-router-dom'
export default function CartTotal({value}) {

    const {cartSubtotal,carttotal,cartTax,clearCart}=value;
    return (
        <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalixe text-right">
                            <Link>
                            <ButtonContainer onClick={()=>clearCart()}>
                                clear cart
                            </ButtonContainer>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    subtotal:
                                </span>
    <strong> Rs .{cartSubtotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    Tax:
                                </span>
    <strong> Rs .{cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    total:
                                </span>
    <strong> Rs .{carttotal}</strong>
                            </h5>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}
