import React from 'react'

const EditExperimento = () => {
  return (
    <div>
      <h2>Página para Edição de Experimento</h2>
      <button>Cancelar</button>
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
                    <label>Data de Criação: </label>
                    <input type="date"/>
                </div>
                <div>
                    <label>Responsável: </label>
                    <input type="text"/>
                </div>
                <button type="submit">Atualizar</button>
            </form>
    </div>
  )
}

export default EditExperimento
