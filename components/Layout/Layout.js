import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../Store/AppContext";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";



const Main = styled.main`
    width: 100%;
    margin-top: 80px;
    font-size: small;
`


export default function Layout(props){
    const {modal} = useContext(AppContext)
    return(<>
            <Modal show = {modal.showModal}>
                <Cart />
            </Modal> 
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
            </>
    )
}
