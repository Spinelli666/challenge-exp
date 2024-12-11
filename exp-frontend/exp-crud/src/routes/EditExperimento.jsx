import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditExperimento = () => {
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataCriacao, setDataCriacao] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navegar = useNavigate();

    useEffect(() => {
        fetchExperimento();
    }, []);

    const fetchExperimento = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/experimentos/${id}/`);
            const data = await response.json();
            setNome(data.nome);
            setDescricao(data.descricao);
            setDataCriacao(data.data);
            setResponsavel(data.responsavel);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const updateExperimento = async (e) => {
        e.preventDefault();

        const expData = {
            nome,
            descricao,
            data: dataCriacao,
            responsavel,
        };

        try {
            const response = await fetch(`http://localhost:8000/api/experimentos/${id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expData),
            });

            const data = await response.json();
            console.log(data);
            navegar('/');
        } catch (err) {
            console.log(err);
        }
    };

    const handleCancel = () => {
        navegar('/');
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>Página para Edição de Experimento</h2>
            <button onClick={handleCancel}>Cancelar</button>
            <form onSubmit={updateExperimento}>
                <div>
                    <label>Nome do Experimento: </label>
                    <input 
                        type="text" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Descrição: </label>
                    <textarea 
                        placeholder="Descreva sobre o seu experimento." 
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Data de Criação: </label>
                    <input 
                        type="date"
                        value={dataCriacao}
                        onChange={(e) => setDataCriacao(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Responsável: </label>
                    <input 
                        type="text"
                        value={responsavel}
                        onChange={(e) => setResponsavel(e.target.value)} 
                    />
                </div>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
};

export default EditExperimento;