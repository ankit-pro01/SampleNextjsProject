import Image from "next/image";
import styled from "styled-components";


const Wrapper =  styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    margin: 10px

`
export default function Offer(){
    return(
        <Wrapper>
            <Image src = {"/static/images/lowest-price.png"} width = {100} height = {20}></Image>
            <p>You Want Find Cheap deals</p>
        </Wrapper >

    )
}