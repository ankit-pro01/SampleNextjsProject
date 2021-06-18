import styled from "styled-components"



const Error = styled.p`
    color: red; 
`


export default function ErrorWrapper({error}){
    return(
        <Error>{error}</Error>
    )
}