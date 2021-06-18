import styled from "styled-components"
import Backdrop from "../Backdrop/Backdrop"
import Container from "../Container/Container"

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default function Modal({show, children, ...props}){

    console.log("show:", show);
    return(
        show ? <>
            <Backdrop />
            <Container col>
                <Wrapper>
                    {children}
                </Wrapper>
            </Container>
        </> : null
    )   
}