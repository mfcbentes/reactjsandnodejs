import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function Form() {

    const [estados, setEstados] = useState([]);
    const [campos, setCampos] = useState({
        txtNome: '',
        txtIdade: 0,
        cmbUF: '0'
    });

    useEffect(() => {
        axios.get('http://localhost:3030/estados').then(response => {
            setEstados(response.data);
        })
    }, []);

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3031/cadastro', campos).then(response => {
            alert(response.data.dados.length + 'cadastros!');
        })
    }

    return (
        <div>
            <Header title="React Form" />
            <form onSubmit={handleFormSubmit} >
                <fieldset>
                    <legend>
                        <h2>Dados de cadastro</h2>
                    </legend>
                    <div>
                        <label>
                            Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Idade:
                            <input type="number" name="txtIdade" id="txtIdade" onChange={handleInputChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            UF:
                            <select name="cmbUF" id="cmbUF" onChange={handleInputChange}>
                                <option value="0">
                                    Selecione uma opção
                                </option>
                                {estados.map(
                                    estado => (
                                        <option key={estado.id} value={estado.id}>
                                            {estado.uf}
                                        </option>
                                    )
                                )}
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>
    )
}

export default Form;