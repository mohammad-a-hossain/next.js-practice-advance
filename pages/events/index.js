import { useState } from 'react';
import {useRouter} from 'next/router'
function EventList({eventLists}){
const [sports,setSports] = useState(eventLists)
const router = useRouter()
    
    const fetchSportsEvents = async ()=>{
        const respone = await fetch('http://localhost:5000/events?category=sports')
        const data = await respone.json()
         setSports(data)
         router.push('/events?category=sports',undefined,{shallow:true})
    
    }

        return(
            <>
            <h1>all event LIst here</h1>
            <button onClick={fetchSportsEvents} type="button">show sports event</button>
            {
                sports.map(event =>{
                    return(
                        <div key={event.id}>
                            <h2>
                            {event.id} | {event.title}|{event.category} 
                            </h2>
                            <p>{event.description}</p>
                        </div>
                    )
                })
            }
            </>
        )

}

export default EventList


export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const querySring =category ? 'category=sports':''
    const respone = await fetch(`http://localhost:5000/events?{querySring}`)
    const data = await respone.json()

    return{
        props:{
            eventLists:data,
        }
    }

}