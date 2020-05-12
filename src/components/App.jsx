import React from 'react'
import '../styles/style.scss'
import CourseCard from './Molecules/CourseCard.jsx'
//import Formulario from './components/Formulario.jsx';
import Courses from './Pages/Courses.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Formulario from './Pages/Form.jsx'
import Course from './Pages/Course.jsx'
import MainMenu from './Organisms/MainMenu.jsx'
import History from './Pages/History.jsx'
import Users from './Pages/Users.jsx'
import Home from './Pages/Home';

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/cursos/:id" component={ Course } />
      <Route path="/cursos" component={ Courses } />  
      <Route path="/historial/:valor" component={ History } />        
      <Route path="/historial" component={ History } /> 
      <Route path="/usuarios" component={ Users } /> 
      <Route path="/formulario" exact component={ () => <Formulario name="Página de contacto"/>} />
      <Route component={() => (
        <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
)
export default App;

//Reglas JSX
// 1: Toda etiqueta debe cerrarse.
// 2: Los componentes deben devolver un solo elemento padre.
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cietaa <img src=""/>
// 6: className => className
// 7: for => htmlFor
// 8: 