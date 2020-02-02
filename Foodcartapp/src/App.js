import React from 'react'
import ReactDom from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css'
import Productlist from './components/Productlist'
import Product from './components/Product'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Default from './components/Default'
import {Switch,Route} from 'react-router-dom'

export default class App extends React.Component{
render(){
    return(
      <React.Fragment>
        <Navbar/>
<Switch>
    <Route  exact path="/" component={Productlist}/>
    <Route path="/details" component={Details}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/default" component={Default}/>

</Switch>
        

      </React.Fragment>
    )
}
}