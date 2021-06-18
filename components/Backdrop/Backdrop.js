import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    z-index:10;
    background-color: rgba(0,0,0,0.6);
    
    @media (max-width: 768px){
        display: none;

    }

`


export default function Backdrop(props){
    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )   
}