import Image from "next/image"
import styled from "styled-components"
import Button from "../Controls/Button/Button"


const StyledCard = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 10px -10px rgba(0, 0, 0, 0.5);
    &:nth-of-type(2n) {
        flex-direction: row
    }

`   
const CardImageContainer = styled.div`
    
`

const CardContent = styled.div`
    
`

const CardActions = styled.div`
    margin-top: auto;
    width: 200px;
    display:block;

`



export default function Card1({title, imgSrc, description, price, ...others}){

    return(
        <StyledCard {...others}>
            <CardImageContainer>
                <Image src = {imgSrc} width = {300} height = {200}/> 
            </CardImageContainer>
            <CardContent>
                <h5>{title}</h5>
                <p>{description}</p>
                <CardActions>
                    <Button type = "button">Buy</Button>
                </CardActions>
            </CardContent>

        </StyledCard>
    )

}