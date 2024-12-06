import { useState } from "react";

const Experimento = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataCriacao, setDataCriacao] = useState("");
    const [responsavel, setResponsavel] = useState("");

    const addExperimento = async (e) => {
        e.preventDefault(); 

        const expData = {
            nome,
            descricao,
            data: dataCriacao,
            responsavel,
        };

        try {
            const response = await fetch('http://localhost:8000/api/experimentos/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expData),
            });

            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Página para Cadastro de Experimento</h2>
            <form onSubmit={addExperimento}>
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
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default Experimento;