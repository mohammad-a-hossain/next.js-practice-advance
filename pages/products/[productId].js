function product({prods}){
    return(
        <div>
        <h3>title:
        {prods.id}{prods.title}
        </h3>
        <p> body:{prods.description}</p>
        </div>
    )

}

export default product

export async function getStaticPaths(){
    const response = await fetch('http://localhost:5000/products')
 const data =await response.json()
 const paths =data.map(prod=>{
     return{
         params:{
             productId:`${prod.id}`
         }
     }
 })
    return{
        // paths:[
        //     {
        //         params:{postId:'1'}
        //     },  {
        //         params:{postId:'2'}
        //     },  {
        //         params:{postId:'3'}
        //     }
        // ],
        paths:paths,
        fallback: true,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`http://localhost:5000/products/${params.productId}`)
    const data = await response.json()
    return{
       props:{
           prods:data,
       }
    }
}