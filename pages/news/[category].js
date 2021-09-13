function CategoryList({news,category}){

    return (
        <div>
            <h1>category list of {category}</h1>
            {
                news.map((nes)=>{
                    return(
                        <div>
                        <li key={nes.id}>{nes.title}</li>
                        <p>{nes.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}   

export default CategoryList


export async function getServerSideProps(context){
    const {params} = context  
    const {category }= params
    const response = await fetch(`http://localhost:5000/news?category=${category}`)
    const data = await response.json()
    return{
        props:{
            news:data,
            category,
        },
    }

}