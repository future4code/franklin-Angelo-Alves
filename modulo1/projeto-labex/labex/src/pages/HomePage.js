import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const HomePage = () => {
    const navigate = useNavigate()


    const goToViagens = (id) =>{
        navigate('/viagens')
    }
    const goToAdmin = (id) =>{
        navigate('/admin')
    }

    return (
        <div>
            <h1>home</h1>
            <button onClick={goToViagens} >Ver viagens</button>
            <button onClick={goToAdmin}>area restrita</button>
        </div>

    )
}