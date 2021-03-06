import React from 'react'
import UserCard from '../Molecules/UserCard.jsx'
import withLoader from '../HOC/withLoader.js'

const UsersGrid = ({users}) => (
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {users.length === 0 ? 
            <h1 className="t3">Cargando</h1>
            :users.map(u =>(
                <UserCard
                    Key={u.id}
                    name={u.name}
                    username={u.username}
                    email={u.email}
                />
            ))}
        </div>
    </div>
)
export default withLoader("users")(UsersGrid) 