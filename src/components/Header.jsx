import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

export default({black})=>{
    return (
        <header className={black?'black':''}>
            <div className='header-logo'>
                <a href='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width="80" height="40" alt="Netflix"/>
                </a>
            </div>
            <ul className='submenus'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Series">Séries</Link>
                </li>
                <li>
                    <Link to="/">Filmes</Link>
                </li>
                <li>
                    <Link to="/">Bombando</Link>
                </li>
                <li>
                    <Link to="/">Minha lista</Link>
                </li>
                <li>
                    <Link to="/">Idiomas e legendas</Link>
                </li>
            </ul>
            <div className='header-user'>
                <a href='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}