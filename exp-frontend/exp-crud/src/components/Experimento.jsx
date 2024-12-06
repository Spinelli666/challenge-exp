const Experimento = () => {

    return (
        <div>
            <h2>Página para Cadastro de Experimento</h2>
            <form>
                <div>
                    <label>Nome do Experimento: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Descrição: </label>
                    <textarea placeholder="Descreva sobre o seu experimento."></textarea>
                </div>
                <div>
                    <label>Data de Criação:  </label>
                    <input type="date" />
                </div>
                <div>
                    <label>Responsável: </label>
                    <input type="text" />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default Experimento