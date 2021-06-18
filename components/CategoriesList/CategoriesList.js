import Card1 from "../Card/Card1"


export default function CategoriesList(props){
    return <>
            {
                props.categories.map(category => (
                    <Card1
                        key = {category.id}
                        title = {category.name}
                        imgSrc = {category.imageUrl}
                        description = {category.description}/>
                ))
            }
            </>
}