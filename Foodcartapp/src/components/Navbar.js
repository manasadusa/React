import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img from '../logo.jpg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import '../App.css'
export default class Navbar extends Component {
    render() {
        return (
            <Navwrap className="navbar navbar-expand-sm  navbar-dark px-sm-10">
                <Link to="/">
                    <img src={img} alt="" className="logo"/>
                </Link>
                <ul  className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">

                    <Link to="/"  className="nav-link ">
                         products
                         </Link>
                    </li>
                   
                   
                </ul>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        cart
                                   </ButtonContainer>
                </Link>
            </Navwrap>
        )
    }
}

const Navwrap= styled.nav
`
background:lightblue;
.nav-link{
    color:blue;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

