function post({post}){
    return(
        <div>
        <h3>title:
        {post.id}{post.title}
        </h3>
        <p> body:{post.body}</p>
        </div>
    )

}

export default post

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
 const data =await response.json()
 const paths =data.map(post=>{
     return{
         params:{
             postId:`${post.id}`
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
        fallback: false
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return{
       props:{
           post:data,
       }
    }
}