import  Link  from 'next/link';
function productList({products}){

  return(
      <div>
      <h1>product lists</h1>
      {products.map((prod)=>{
          return(
              <div key={prod.id}>
                   <Link href={`products/${prod.id}`} passHref>
            <li> {prod.title }{ prod.price} 
                 <hr/>
               </li> 
               </Link>
              </div>
             
          )
          
      })}

      </div>
  )
}
export default productList


export async function getStaticProps(){
 const response = await fetch('http://localhost:5000/products')
 const data =await response.json()
 return {
     props:{
         products:data,
     }
 }
}