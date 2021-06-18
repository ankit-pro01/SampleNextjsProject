import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { AppContext } from "../../Store/AppContext";
import Offer from "../Card/Offer";
import CartItems from "../Cart/CartItems";
import Button from "../Controls/Button/Button";
import { useRouter } from "next/router";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;    
    background-color: #e8e8e8;
    width: 400px;
    height:89vh;
    top:80px;
    position: fixed;
    z-index:11;
    margin: ${(props) => (props.empty ? "0px 0px 0px 0px": "auto" )};


    @media (max-width: 768px){
        width:100%;
        left:0px;
    }
`


const Content = styled.div`
    width: 100%;
    text-align: center;
    overflow-y:auto;
`

const CloseIcon = styled.div`
    margin-left: auto;
    cursor: pointer;
`

const CartTitle = styled.div`
    display: flex;
    width:100%;
    padding: 0px 20px;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
    color: white;

    @media (max-width: 768px){
        background-color: white;
        color: black;
        margin: 12px 0px 12px 0px;

    }

`

const CartFooter = styled.div`
    text-align: center;
    width:100%;
    background-color: white;
    margin-top: auto;
    padding:10px;

    & button {
        width: 100%;
        padding: 15px;
    }

`

export default function Cart(){
    const {modal, Cart} = useContext(AppContext);
    const [cartAmount, setCartAmount] = useState(0)

    useEffect(() => {
        let total = Object.values(Cart.cartData).reduce((total, x) => total + (x.quantity * x.price),0)
        setCartAmount(total)       
    }, [Cart.cartData])
    
    const router = useRouter();
    const isCartEmpty = Cart.cartData.length === 0;



    const handleControls = (type, product) => {
        console.log("product...", product);

        switch (type) {
            case "add":
                let newProduct1 = {...product};
                let index = Cart.cartData.findIndex( x => x.cartId === product.cartId );
                let filteredProducts1 = Cart.cartData.filter(x => x.cartId !== product.cartId)
                newProduct1.quantity = newProduct1.quantity + 1;
                filteredProducts1.splice(index,0,newProduct1);
                Cart.setCartData(filteredProducts1)
                break;

            case "remove":
                let newProduct = {...product};
                let filteredProducts = Cart.cartData.filter(x => x.cartId !== product.cartId)
                newProduct.quantity = newProduct.quantity - 1;
                if(!newProduct.quantity == 0)
                    filteredProducts.push(newProduct)
                Cart.setCartData(filteredProducts)
                break;
        
            default:
                break;
        }
    }   
    

    
    const getCartContent = () => {
        let content  = EmptyCart()

        if(!isCartEmpty)
            content = <><CartItems cartItems = {Cart.cartData} onClick = {handleControls}/><Offer /></>

        return content
    }


    const EmptyCart = () => {
        return(
            <>
                <h4>No items in Your Cart</h4>
                <p>Your Favourities items just click away</p>
            </>
        )
    }

    const handleClick = () => {
        if(isCartEmpty)
            router.push("/products")    
        modal.setShowModal(false)
    }


    const CartButton = <Content empty>
        {!isCartEmpty ? 
    (<>Proceed to checkout <span>Rs.{cartAmount + " " + ">"}</span></>) : <p>Start Shopping</p>}
    </Content>

    return(
            <Wrapper>
                <CartTitle>
                    <h5>My Cart {Cart.cartData.length} items</h5>
                    <CloseIcon onClick = {() => modal.setShowModal(false)}>Close</CloseIcon>
                </CartTitle>
                <Content empty = {isCartEmpty}>
                    {getCartContent()}
                </Content>
                <CartFooter>
                    {!isCartEmpty ? <p>Promo Code can be apply on the payment Page</p>: null}
                    <Button onClick = {handleClick}>{CartButton}</Button>
                </CartFooter>          
            </Wrapper>
    )
}