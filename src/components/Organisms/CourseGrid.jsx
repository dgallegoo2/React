import React from 'react'
import CourseCard from '../Molecules/CourseCard.jsx'

const courses = [
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


const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
        courses.map(c => (
        <CourseCard
            id={c.id}
            title={c.titulo}
            image={c.image}
            price={c.price}
            profesor={c.profesor}
        />))
        }
    </div>
)

export default CourseGrid