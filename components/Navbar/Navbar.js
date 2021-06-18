import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../Store/AppContext"


const StyledNav = styled.nav`
    display: flex;
    color: grey;
    flex: 78%;
    justify-content: space-between;

    & a{
        text-decoration: none;
        color: grey;
    }

    & .pages-links{
        margin-top: auto;
        padding: 20px;
        & a{
            margin-left: 10px
        }
    }

    & .auth-links{
        display:block;
        margin-left: auto;
        font-size: small;
        & a{
            margin : 0px 0px 5px 10px;
        }
    }

    & .cart-button{
        margin-top: 15px;
        display: flex;
        align-items: center;
        background-color: #E8E8E8;
        padding: 10px;
        cursor: pointer;
    }
    `



export default function Navbar({children, ...props}){

    const {modal, Cart} = useContext(AppContext);

    const cartItemsCount = Cart.cartData.length

    return(
        <StyledNav>
            <div className = "pages-links">
                <Link href= "/">Home</Link>
                <Link href= "/products">Products</Link>
            </div>
            <div>
                <div className = "auth-links">
                    <Link href= "/login">Signup</Link>
                    <Link href= "/register">Register</Link>
                </div>
                <div className = "cart-button" onClick = {() => modal.setShowModal(true)}>
                    <Image src = {"/static/images/cart.svg"} width={30} height = {30} />
                    {cartItemsCount} items
                </div>
            </div>
                
        </StyledNav>
    )
}