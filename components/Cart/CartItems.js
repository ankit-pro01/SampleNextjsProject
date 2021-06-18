import CartCard from "../Card/CartCard"



const total = 10;

export default function CartItems({cartItems, onClick}){

    return (
        <>
            {
                cartItems.map(item => 
                    <CartCard 
                        key = {item.cartId} 
                        data = {item} 
                        total = {total} 
                        onClick = {onClick}/>)
            }
        </>
    )
}