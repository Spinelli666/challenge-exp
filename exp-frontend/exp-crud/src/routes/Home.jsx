import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import "../styles/Home.css";

const Home = () => {
    const [experimento, setExperimento] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navegar = useNavigate();

    useEffect(() => {
        fetchExperimento();
    }, []);

    const fetchExperimento = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/experimentos/');
            const data = await response.json();
            setExperimento(data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleCriarExperimento = () => {
        navegar('/experimento');
    }

    const handleEditExperimento = (id) => {
        navegar(`/experimento/${id}`);
    }

    const deleteExperimento = async (id) => {
        try {
            await fetch(`http://localhost:8000/api/experimentos/${id}/`, {
                method: 'DELETE',
            });

            setExperimento((prev) => prev.filter((experimento) => experimento.experimento_id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const filteredExperimentos = experimento.filter((exp) =>
        exp.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.responsavel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <header>
                <h1>Gerenciamento de Experimentos</h1>
                <button className="create-button" onClick={handleCriarExperimento}>Criar Experimento</button>
            </header>
            <input
                type="text"
                className="search-bar"
                placeholder="Pesquisar experimentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
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
                    {filteredExperimentos.map((experimento) => (
                        <tr key={experimento.experimento_id}>
                            <td>{experimento.experimento_id}</td>
                            <td>{experimento.nome}</td>
                            <td>{experimento.descricao}</td>
                            <td>{experimento.data}</td>
                            <td>{experimento.responsavel}</td>
                            <td>
                                <button className="action-button" onClick={() => handleEditExperimento(experimento.experimento_id)}>
                                    <FaEdit />
                                </button>
                                <button className="action-button" onClick={() => deleteExperimento(experimento.experimento_id)}>
                                    <FaTrash />
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