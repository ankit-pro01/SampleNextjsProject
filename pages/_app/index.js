import { useState } from 'react';
import { AppContext } from '../../Store/AppContext';
import '../../styles/styles.css'

export default function App({ Component, pageProps }) {

   const[showModal, setShowModal] = useState(false);
   const[cartData, setCartData] = useState([]);
   const[cartItemsAmount, setCartItemsAmount] = useState(0)

   const data = {
       modal : {
           showModal: showModal,
           setShowModal: setShowModal
       },
       Cart : {
           cartData : cartData,
           setCartData: setCartData,
           cartItemsAmount: 0,
           setCartItemsAmount: 0,

       }
       
   }


   return(
      <AppContext.Provider value = {data}> 
            <Component {...pageProps} />
      </AppContext.Provider>

   )

}