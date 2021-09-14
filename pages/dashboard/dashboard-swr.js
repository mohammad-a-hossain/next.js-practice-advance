import useSWR from 'swr'


const fetcher = async()=>{

    const response = await fetch('http://localhost:5000/dashboard')
    const data = await response.json()
    return data
}

function dashboardSwr(){
    const {data,error} =useSWR('dashboard',fetcher)
    if(error) return <h3>an error occured</h3>
    if(!data) return <h3>loading...</h3>
    return(
        <div>
        <h1>dashboard swr</h1>
        <li>total dashboard post - {data.title}</li>
        <li>total post description -{data.description}</li>
        <li>total post category -{data.category}</li>
        <li>post new -{data.latetst}</li>
        <li>post today -{data.today}</li>
    </div>
    )
}

export default dashboardSwr