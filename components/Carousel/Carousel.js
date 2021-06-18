import Image from "next/image";
import { useEffect, useState } from "react"
import styled from "styled-components";


const StyledCarousel = styled.div`
    display : flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0 8px 10px -10px rgba(0, 0, 0, 0.5);

    & img{
        width: 100%;
    }

    & p{
        cursor: pointer;
        color: white;
        padding: 5px;
        background-color : grey;
    }

    & .next{
        z-index: 1;
        position : absolute;
        right: 0px;
    }

    & .previous{
        z-index: 1;
        position : absolute;
        left: 0px;

    }
`

export default function Carousel({imageLists}){

    
    const [currentImage, setCurrentImage ] = useState(1)

    const nextButtonHandler = () => {
        setCurrentImage(currentImage + 1)
    }

    const prevButtonHandler = () => {
        setCurrentImage(currentImage - 1)
    }


    return(
        <StyledCarousel>
            {(imageLists.length > currentImage) ? 
            <p className = "next" onClick = {nextButtonHandler}>next</p>
            : null}

            <Image src = {imageLists[currentImage -1].bannerImageUrl} width = {1000} height = {240}></Image>

            {(currentImage - 1) !== 0 ? 
                <p className = "previous" onClick = {prevButtonHandler}>previous</p>
            : null}
        </StyledCarousel>
    )
}