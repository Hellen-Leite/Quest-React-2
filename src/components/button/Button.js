import "./button.css"

const mostrarAlerta = () => {
    alert("A label desse botão é baixar CV")
}

const Button = (props) => {
    return <button className="botao" onClick={mostrarAlerta}>{props.label}</button>
}

export default Button