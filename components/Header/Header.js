import Image from "next/image"
import Navbar from "../Navbar/Navbar"
import styled from "styled-components"
import Container from "../Container/Container"




const HeaderWrapper = styled.header`
    position: fixed;
    top:0px;
    background-color: white;
    z-index: 2;
    box-shadow: 0 8px 10px -10px rgba(0, 0, 0, 0.5);
    width: 100%;
        & .logo{
            display: flex;
            flex: 22%;
            align-items: center;
            justify-content: flex-start;
        }
    }
    
    `

export default function Header(){
    return( 
            <HeaderWrapper>
                <Container>
                    <div className = "logo">
                        <Image src = {"/static/images/logo_2x.png"} 
                        width = {'150%'}
                        height = {'80%'}/>
                    </div>
                    <Navbar />
                </Container>
            </HeaderWrapper>
    )
}