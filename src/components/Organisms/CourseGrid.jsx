import React from 'react'
import CourseCard from '../Molecules/CourseCard.jsx'
import withLoader from '../HOC/withLoader.js'

const CourseGrid = ({courses}) =>(
    <div className="ed-grid m-grid-4">
        {   
            courses.map(c => (
            <CourseCard
                key={c.id}
                id={c.id}
                title={c.titulo}
                image={c.image}
                price={c.price}
                profesor={c.profesor}
            />)) 
        }
    </div>
)
export default withLoader("courses")(CourseGrid) 