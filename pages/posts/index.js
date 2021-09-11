import  Link  from 'next/link';
function postList({posts}){

  return(
      <div>
      <h1>user posts lists</h1>
      {posts.map((post)=>{
          return(
              <div key={post.id}>
                   <Link href={`posts/${post.id}`} passHref>
            <li>  {post.id   }  {post.title} 
                 <hr/>
               </li> 
               </Link>
              </div>
             
          )
          
      })}

      </div>
  )
}
export default  postList


export async function getStaticProps(){
 const response = await fetch('https://jsonplaceholder.typicode.com/posts')
 const data =await response.json()
 return {
     props:{
         posts:data,
     }
 }
}