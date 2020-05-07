import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            date: new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    changeDate() {
        this.setState({
            date: new Date()
        })
    }
    //this.setState({})

    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4>Fecha Actual: {Math.ceil(this.state.date/1000)}</h4>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">                       
                            <label>Nombre Completo</label>
                            <input 
                            type="text" 
                            onChange={this.changeName}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input 
                            type="text"
                            onChange={this.changeEmail}/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    //componentDidMount justo después de renderizar todo el elemento
    componentDidMount()
    {
        let elemento = document.getElementById("elemento")
        
        this.intervaloFecha =  setInterval(() => {
            this.changeDate()
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




    export default Form