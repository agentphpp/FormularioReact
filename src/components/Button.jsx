import './Button.css'

function Button(props) {
    return (
        <div>
            <button type="submit" className="btn-submit" onClick={props.Enviar}>Enviar Cadastro</button>
            <button type="button" className="btn-clear">Limpar Dados</button>
        </div>
    )
}

export default Button