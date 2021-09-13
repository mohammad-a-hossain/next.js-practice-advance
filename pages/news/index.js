


function NewsArticleList({newses}){
            

    return( 
        <div>
        <h2>news list</h2>
      {
          newses.map(nes=>{
              return(
                  <div key={nes.id}>
                      <li>{nes.title} - {nes.description}</li>
                  </div>
              )
          })
      }
      
        
        
        </div>
    
    )
}

export default NewsArticleList

export async function getServerSideProps(){
    const response = await fetch('http://localhost:5000/news')
    const data =await response.json()
    
    return{
        props:{
            newses:data, 
        },
      
    }
}