import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const HomePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/')
        }
    }, [])

    const goToTrip = () =>{
        navigate('/admin/trips/00yD1s00AxDbnWKiZjL7')
    }
    return (
        <div>
            <h1>home</h1>
            <button onClick={goToTrip} >Ver detalhes da Viagem Ano Novo em Mercurio</button>
        </div>

    )
}