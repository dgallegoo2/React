import React, { Component } from 'react'
import axios from 'axios'
import Coursegrid from '../Organisms/CourseGrid.jsx'


class Courses extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            courses: []
        }
    }

    componentDidMount()
    {
        axios.get('http://my-json-server.typicode.com/dgallegoo2/jsondb/cursos')
        .then(response => this.setState({
            courses: response.data
        }))
    }
    
    render(){
        const {courses} = this.state
        return <Coursegrid courses={courses}/>
    }
}
export default Courses