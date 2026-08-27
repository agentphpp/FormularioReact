import './Form.css'
import { useState } from 'react'
import Button from './Button'

function Form() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")
    const [telefone, setTelefone] = useState("")
    const [pais, setPais] = useState("brasil")
    const [bio, setBio] = useState("")
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    

    function colocarNome(pabloVitar) {
        setNome(pabloVitar.target.value);
    }

    function colocarSobrenome(pabloVitar) {
        setSobrenome(pabloVitar.target.value);
    }

    function colocarEmail(pabloVitar) {
        setEmail(pabloVitar.target.value);
    }

    function colocarData(pabloVitar) {
        setData(pabloVitar.target.value);
    }

    function colocarTelefone(pabloVitar) {
        setTelefone(pabloVitar.target.value);
    }

    function colocarPais(pabloVitar) {
        setPais(pabloVitar.target.value);
    }

    function colocarBio(pabloVitar) {
        setBio(pabloVitar.target.value);
    }

    function colocarUser(pabloVitar) {
        setUser(pabloVitar.target.value);
    }

    function colocarPass(pabloVitar) {
        setPass(pabloVitar.target.value);
    }

    return (
        <div className="container">
           
            <form >
                <h2>Cadastro de Usuário</h2>

                <div className="field-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={nome} onChange={colocarNome} required/>
                </div>

                <div className="field-group">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" name="sobrenome" value={sobrenome} onChange={colocarSobrenome} />
                </div>

                <div className="field-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={colocarEmail} required/>
                </div>

                <div className="field-group">
                    <label htmlFor="date">Data de Nascimento</label>
                    <input type="date" name="date" value={data} onChange={colocarData} />
                </div>

                <div className="field-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name="telefone" placeholder="(00) 00000-0000" value={telefone} onChange={colocarTelefone} />
                </div>

                <div className="field-group">
                    <label htmlFor="pais">País</label>
                    <select name="pais" id="pais" value={pais} onChange={colocarPais}>
                        <option value="brasil">Brasil</option>
                        <option value="caboverde">Cabo Verde</option>
                        <option value="portugal">Portugal</option>
                        <option value="angola">Angola</option>
                    </select>
                </div>

                <div className="field-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio" rows="4" value={bio} onChange={colocarBio}></textarea>
                </div>

                <div className="field-group">
                    <label htmlFor="funcao">Função no sistema</label>
                    <select name="funcao" id="funcao" value={user} onChange={colocarUser}>
                        <option value="usuario">Usuário</option>
                        <option value="admin">Admin</option>
                        <option value="adminS">Admin Supremo</option>
                        <option value="ednaldo">Ednaldo Pereira</option>
                    </select>
                </div>

                <div className="field-group">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" value={pass} onChange={colocarPass} required minLength={6} maxLength={16}/>
                </div>

                <div className="checkbox-group">
                    <input type="checkbox" id="termos" name="termos" />
                    <label htmlFor="termos">Aceito os termos</label>
                </div>

              
                <Button  />
            </form>
        </div>
    )
}

export default Form;
