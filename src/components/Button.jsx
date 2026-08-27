import './Button.css'

function Button() {
    return (
        <div>
            <button type="submit" className="btn-submit" >Enviar Cadastro</button>
            <button type="button" className="btn-clear">Limpar Dados</button>
        </div>
    )
}

export default Button