import Image from "next/image"
import styled from "styled-components"
import Button from "../Controls/Button/Button"


const StyledCard = styled.div`
    display: flex;
    height: 20rem;
    flex-flow:column;
    width : 10.6rem;
    margin: 5px;
    padding: 5px;
    border-bottom: 1px dashed grey;

    @media (max-width: 420px){
        flex-flow: row;
    }

    @media (max-width: 420px){
        width: 100%
    }
    
`

const CardImageContainer = styled.div`

`




const CardContent = styled.div`
    height: 8rem;
    margin: 0.5rem;
    padding: 5px;
    align-items: center;
    background-color: #e8e8e8;
    font-size: 10px;
    overflow: hidden;
        
    
`

const CardActions = styled.div`
    height : 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between
`



export default function Card({product, onClick,...others}){

    return(
        <StyledCard {...others}>
            <h5>{product.name}</h5>
            <CardImageContainer>
                <Image src = {product.imageURL} height = {150} width = {200}/> 
            </CardImageContainer>
                <CardContent>
                    {product.description}
                </CardContent>
                <CardActions>
                    <p>Mrp Rs {product.price}</p>
                    <Button type = "button" onClick = {(e) => onClick(e, product)}>Buy Now</Button>
                </CardActions>
        </StyledCard>
    )

}