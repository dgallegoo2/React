import React from 'react'
import CourseGrid from '../Organisms/CourseGrid.jsx'

const cursos = [
    {
        "id": 1,
        "titulo": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
        "price": 40,
        "profesor": "Bero Quiroga"
    },
    {
        "id": 2,
        "titulo": "Drupal desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/bbd8d697-6339-47af-9c7e-0fc37f7bbce2.png",
        "price": 30,
        "profesor": "Alexys Tobón"
    },
    {
        "id": 3,
        "titulo": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/c280eaa2-c461-4306-82bf-29061e2829e5.png",
        "price": 50,
        "profesor": "Daniel Gallego"
    },
    {
        "id": 4,
        "titulo": "Business Intelligende",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/3eb96c30-4aa8-4227-92dd-095f1e06cefb.png",
        "price": 150,
        "profesor": "Martin Forero"
    }
]

const Course = ({ match }) => {

    const CursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (        
        <div className="ed-grid">
        {
            CursoActual ? (
            <>
                <h1 className="m-cols-3">{ CursoActual.titulo }</h1>
                <img className="m-cols-1" src={CursoActual.image} alt={CursoActual.titulo}/>
                <p className="m-cols-1">Profesor: {CursoActual.profesor}</p>
            </>
            ):<h1>El curso no existe</h1>
        }
        </div>
    )
    
}
export default Course