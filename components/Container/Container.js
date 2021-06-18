import styled from "styled-components"

const StyledContainer = styled.div`
    margin: auto;
    width: 75%;
    display: flex;
    flex-direction: ${props => (props.col ? 'column' : 'row')};

    @media (max-width: 768px){
        width: 100%;
        margin:0px;
    }
    
`


export default function Container(props){
    console.log(props.col);
    return <StyledContainer col = {props.col}>{props.children}</StyledContainer>
}



