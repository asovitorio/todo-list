import React from 'react'
import './style.css'

export default props => {
    return (
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark menu">
                <a className="navbar-brand" href="#teste"><i className='far fa-calendar-check'></i> TodoApp</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 link-menu">
                    <li className="nav-item active">
                        <a className="nav-link" href="/todos">Tarefa <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Sobre</a>
                    </li>
                </ul>
        </nav>
    )
}