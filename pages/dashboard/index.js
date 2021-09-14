
import {useState,useEffect} from 'react'


function Dashboard(){
const [isLoading,setIsloading] = useState(true)
const [dashboardData,setDashboardData] = useState(null)

useEffect(()=>{
    async function  fetchDashboardData() {
         const response = await fetch('http://localhost:5000/dashboard')
         const data = await response.json()
         console.log(data)
         setDashboardData(data)
         setIsloading(false)
    }
    fetchDashboardData()

},[])

if(isLoading){
    return <h1>Loading....</h1>
}
return(
    <div>
        <li>total dashboard post - {dashboardData.title}</li>
        <li>total post description -{dashboardData.description}</li>
        <li>total post category -{dashboardData.category}</li>
        <li>post new -{dashboardData.latetst}</li>
        <li>post today -{dashboardData.today}</li>
    </div>
)
}
export default Dashboard
