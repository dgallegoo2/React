import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Curso = ({id, title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title}/>
            </Link>            
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Prof.: ${profesor}`}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `${price}`}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string,
    id: PropTypes.number

}

Curso.defaultProps = {
    title: "No se encontro titulo",
    image: "https://img.pngio.com/rojo-no-hay-seal-vector-material-rojo-no-prohibido-png-y-vector-prohibido-png-650_651.png",
    price: "--",
    profesor: ""
}
export default Curso