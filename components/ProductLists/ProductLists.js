import { useContext } from "react";
import styled from "styled-components"
import { AppContext } from "../../Store/AppContext";
import Card from "../Card/Card";


const StyledContainer = styled.div`
    display : flex;
    flex: 75%;
    flex-flow : row wrap;

`

export default function ProductLists(props){

    const {Cart} = useContext(AppContext);

    const CartRequest = async (data) => {
        const productId = data.id;

        const response = await fetch("http://localhost:5000/addToCart ", {
            method: 'POST',
            body: JSON.stringify(productId)
          });

        return response.json()

    }

    const generateRandomId = () => {
        return ("CartItem" + Date.now())

    }

    const addToCart = (e,product) => {
        CartRequest(product).then(
            data => {
                if(data.response === "Success"){
                    let newProduct = {...product}
                    newProduct.cartId = generateRandomId();
                    newProduct.quantity = 1;
                    Cart.setCartData([...Cart.cartData, newProduct])
                }
            }
        ).catch(
            err => {console.log(err)}
        )          
    }
    
    return <StyledContainer>
                        {                
                            props.products.map(product => (
                                <Card
                                    key = {product.id} 
                                    product = {product}
                                    onClick = {addToCart} />
                            ))
                        }
            </StyledContainer>
}