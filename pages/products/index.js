import { useContext, useState } from "react";
import styled from "styled-components";
import DropDown from "../../components/DropDown/DropDown";
import Layout from "../../components/Layout/Layout";
import ProductLists from "../../components/ProductLists/ProductLists";
import Sidebar from "../../components/Sidebar/Sidebar";



const Wrapper = styled.div`
    margin: auto;
    width: 75%;
    display: flex;

    @media (max-width: 768px){
        width: 100%;
        margin:0px;
    }

    @media (max-width: 425px){
        flex-direction: column;
    }


`

export default function Products(props){
    const [products, setProducts] = useState(props.products)
    const [selectedId, setSelectedId] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(products)


    const handleSelect = (e, id = null) => {
        let categoryId =  id ? id : e.target.value;

        if(categoryId === selectedId){
            setFilteredProducts(props.products)
        }
        
        else{
            const list =  products.filter(x => x.category === categoryId);
            setFilteredProducts(list)
            setProducts(props.products)
        }

        setSelectedId(categoryId)
        
    }

    return (
        <>
            <Layout>
                <Wrapper>
                    <DropDown items ={props.categories} onChange = {handleSelect}/>
                    <Sidebar links={props.categories} onClick = {handleSelect}/>
                    <ProductLists products = {filteredProducts} />
                </Wrapper>                    
            </Layout>
        </>
    )
}



export async function getStaticProps() {
    const categoriesResponse = await fetch('http://localhost:5000/categories')
    if (!categoriesResponse.ok){
        const message = `An error has occured: ${response.status}`; 
        throw new Error(message); 
    }
    const categories = await categoriesResponse.json()

    const productResponse = await fetch('http://localhost:5000/products')
    if (!productResponse.ok){
        const message = `An error has occured: ${response.status}`; 
        throw new Error(message); 
    }

    const products = await productResponse.json()

    return {
        props : {
            categories,
            products
        },
        revalidate : 10
    }
}