import React from 'react'
import Logo from './Logo.jsx'
import { Link,NavLink } from 'react-router-dom'

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <Logo/>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
                <ul>
                    <li><NavLink exact to="/home" activeClassName="activo" >Inicio</NavLink></li>
                    <li><NavLink to="/cursos" activeClassName="activo" >Cursos</NavLink></li>
                    <li><NavLink to="/formulario" activeClassName="activo" >Formulario</NavLink></li>
                    <li><NavLink to="/usuarios" activeClassName="activo" >Usuarios</NavLink></li>
                </ul>
            </nav>
            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
    </header>
)

export default MainMenu