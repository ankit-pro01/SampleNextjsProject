import styled from "styled-components"

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    border: none;
    background-color: #c10067;
    color: white;
    padding: 0.8rem;  
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.4;
        pointer-events: all !important;
      }
`

export default function Button({children, ...props}){
    return(
        <StyledButton {...props}>{children}</StyledButton>
    )
}