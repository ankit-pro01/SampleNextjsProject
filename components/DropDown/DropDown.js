import styled from "styled-components"

const Wrapper = styled.div`
    display: none;
    width: 100%;

     & select{
        display:flex;
        position: relative;
        width: 100%;
        padding: 8px;
        background-color: #c10067;
        color: white;
        border: 1px solid transparent;
     }

     & option{
        display: block;
        max-width: 20px;
        position: absolute;
    }

    @media (max-width: 425px){
        display:block;
    }
`

export default function DropDown({items, onChange}){
    return(
        <Wrapper>
            <select onChange = {onChange}>
                {items.map( item => {
                    return (
                        <option key = {item.id} value = {item.id} >{item.name}</option>
                    )
                })}
            </select>
        </Wrapper>
    )
}