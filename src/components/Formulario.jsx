import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }
    //this.setState({})

    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4>Fecha Actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">                       
                            <label>Nombre Completo</label>
                            <input 
                            type="text" 
                            onChange={this.cambiarNombre}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input 
                            type="text"
                            onChange={this.cambiarCorreo}/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    //componentDidMount justo después de renderizar todo el elemento
    componentDidMount()
    {
        let elemento = document.getElementById("elemento")
        
        this.intervaloFecha =  setInterval(() => {
            this.cambiarFecha()
        },1000)
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log(prevProps)
        console.log(prevState)
        console.log("---------------")
    }

    componentWillMount()
    {
        clearInterval(this.intervaloFecha)
    }
}




    export default Formulario