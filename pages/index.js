import CategoriesList from "../components/CategoriesList/CategoriesList";
import Carousel from "../components/Carousel/Carousel"
import Layout from "../components/Layout/Layout";
import Container from "../components/Container/Container";


export default function Home(props){    

    return(
        <Layout>
            <Container col>
                <Carousel imageLists  = {props.banners} />
                <CategoriesList  categories = {props.categories}/>
            </Container>
        </Layout>
    )
}


export async function getStaticProps() {
    const bannersResponse = await fetch('http://localhost:5000/banners')
    console.log("res", bannersResponse);
    if (!bannersResponse.ok){
        const message = `An error has occured: ${bannersResponse.status}`; 
        throw new Error(message); 
    }

    const banners = await bannersResponse.json()

    const categoriesResponse = await fetch('http://localhost:5000/categories')
    if (!categoriesResponse.ok){
        const message = `An error has occured: ${categories.status}`; 
        throw new Error(message); 
    }

    const categories = await categoriesResponse.json()

    return {
        props : {
            banners,
            categories
        },
        revalidate : 10
    }
}