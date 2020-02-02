import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const ProductContext=React.createContext();
class ProductProvider extends Component {
    state={
        products:[],
        detailprod:detailProduct,
        cart:[],
        carttotal:0,
        cartTax:0,
        cartSubtotal:0
    }

    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>
            {
                const singleitem={...item};
                tempProducts=[...tempProducts,singleitem];
            });
            this.setState( ()=>{
                return{
                    products:tempProducts
                };
               
            });
    }
increment=(id)=>{
    console.log("in ncrement method");

    let tempcart=[...this.state.cart];
    const selectedprod=tempcart.find(item=>item.id===id)
    const index= tempcart.indexOf(selectedprod);
    const pro=tempcart[index];
    pro.count=pro.count+1;
    pro.total=pro.count*pro.price;
    this.setState(()=>{
        return {
            cart:[...tempcart]
        }
    },()=>{this.addTotal()})

}
decrement=(id)=>{
    console.log("in decrement method");
    
    let tempcart=[...this.state.cart];
    const selectedprod=tempcart.find(item=>item.id===id)
    const index= tempcart.indexOf(selectedprod);
    const pro=tempcart[index];
    pro.count=pro.count-1;
    if(pro.count===0){
        this.removeItem(id);
    }
    else{
        pro.total=pro.count*pro.price;
        this.setState(()=>{
            return {
                cart:[...tempcart]
            }
        },()=>{this.addTotal()})
    }
    
}
removeItem=(id)=>{
    console.log("item removed");
    let temppro=[...this.state.products];
    let tempcart=[...this.state.cart];
    tempcart=tempcart.filter(item=>item.id!==id);
    const index=temppro.indexOf(this.getIem(id));
    let remProd=temppro[index];
    remProd.inCart=false;
    remProd.count=0;
    remProd.total=0;
    this.setState(
        ()=>{
            return{
                cart :[...tempcart],
                products:[...temppro]
            }
        },
        ()=>{
            this.addTotal();
        }
    )
}

clearCart=()=>{
    this.setState(
        ()=>{
            return{
                cart :[]
            }
        },()=>{
            this.setProducts();
            this.addTotal();
        }
    )
    console.log("cart was cleared");
}

    getIem=(id)=>{
        const product=this.state.products.find(item=>item.id===id);
        return product;
    }
    handleDetail=(id)=>{
        console.log("helllooo from detil");
        const product=this.getIem(id);
        this.setState(()=>{
            return{detailprod:product}
        })

    }
    addToCart=(id)=>{
        console.log("hello from cart the id is"+id);
        let tempr=[...this.state.products];
        const index=tempr.indexOf(this.getIem(id));
        const prod=tempr[index];
        prod.inCart=true;
        prod.count=1;
        const price=prod.price;
        prod.total=price;
        this.setState(()=>{
            return{
                products:tempr,cart:[...this.state.cart,prod]
            }
        },   ()=>{this.addTotal()})
     
    }


    addTotal=()=>{
        let subtotal=0;
        this.state.cart.map(item=>(subtotal+=item.total));
        const temptax=subtotal*0.1;
        const tax=parseFloat(temptax.toFixed(2));
        const total=subtotal+tax
        this.setState(()=>{
            return{
                cartSubtotal:subtotal,
                cartTax:tax,
                carttotal:total
            }
        })
    }
    render() {
        return (
            <div>
                <ProductContext.Provider value={{...this.state, 
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}


const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};