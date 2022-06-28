import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios
 from "axios"
export const TripDetailsPage = ()=>{
    const navigate = useNavigate()

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/00yD1s00AxDbnWKiZjL7',{
        headers: {
            'auth' : localStorage.getItem('token')
        }
    }).then((response) => {
       console.log(response.data)
       console.log(response.data.trip.id)
    }).catch((error) => {
        console.log(error.response)
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null){
            navigate('/')
        }
    }, [])

    return(
        <h2>O id da Viagem estará no console</h2>
    )
}
