import { useEffect, useState } from 'react'

const Home = () => {

    const [experimento, setExperimento] = useState([])

    useEffect(() => {
        fetchExperimento()
    }, [])

    const fetchExperimento = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/experimentos/')
            const data = await response.json()
            setExperimento(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Home</h1>
            {experimento.map((experimento) => (
                <div key={experimento.experimento_id}>
                    <p>Nome: {experimento.nome}</p>
                    <p>Descrição: {experimento.descricao}</p>
                    <p>Data: {experimento.data}</p>
                    <p>Responsável: {experimento.responsavel}</p>
                </div>
            ))}
        </div>
    )
}

export default Home