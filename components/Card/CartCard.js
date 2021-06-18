import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Controls from "../Controls/Controls";
import ProductLists from "../ProductLists/ProductLists";



const Wrapper = styled.div`
    display: flex;
    padding: 5px;
    align-items: flex-end;
    justify-content: space-between;
    background-color: white;
    margin: 0px 0px 10px 0px;

`

const Content = styled.div`
    display: flex;
    text-align:justify;
    & button{
        width: 25px;
        border-radius: 5px;
        margin: 0px 15px 0px 15px;
        padding: 0px 6px 0px 6px;
        font-size: large;
        display: inline-box;
        font-weight: bold;
    }

    & .total{
        margin-left: auto;
    }

`



export default function CartCard({data, onClick, total}){

    return(
        <Wrapper>
                <Content>
                    <Image src = {data.imageURL}  width ={80} height = {80}></Image>

                    <div>
                        <h5>{data.name}</h5>
                        <p className = "controls">

                            <Controls.Button 
                            className = "decrement"
                            onClick = {() => onClick("remove", data)}>
                            -</Controls.Button>

                            {data.quantity}
                            <Controls.Button 
                                className = "increment" 
                                onClick = {() => onClick("add", data)}>
                            +</Controls.Button>

                            x
                            {data.price}
                        </p>
                    </div>
                </Content>
                <p className = "total">
                Rs {data.quantity*data.price}
                </p>
        </Wrapper>
    )

}