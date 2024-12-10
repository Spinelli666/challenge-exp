import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

import "../styles/Home.css";

const Home = () => {
    const [experimento, setExperimento] = useState([]);
    const navegar = useNavigate()

    useEffect(() => {
        fetchExperimento();
    }, []);

    const fetchExperimento = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/experimentos/')
            const data = await response.json();
            setExperimento(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCriarExperimento = () => {
        navegar('/experimento')
    }

    const handleEditExperimento = (id) => {
        navegar(`/experimento/${id}`)
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleCriarExperimento}>Criar Experimento</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Criado em</th>
                        <th>Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    {experimento.map((experimento) => (
                        <tr>
                            <td>{experimento.experimento_id}</td>
                            <td>{experimento.nome}</td>
                            <td>{experimento.descricao}</td>
                            <td>{experimento.data}</td>
                            <td>{experimento.responsavel}</td>
                            <td>
                                <button onClick={() => handleEditExperimento(experimento.experimento_id)}>
                                    <FaEdit />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;