import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

export default({black,page})=>{
    return (
        <header className={black?'black':''}>
            <div className='header-logo'>
                <a href='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width="80" height="40" alt="Netflix"/>
                </a>
            </div>
            <ul className='submenus'>
                <li>
                    <Link to="/" className={page==='inicio'? "pageSelected":null}>Inicio</Link>
                </li>
                <li>
                    <Link to="/Series" className={page==='Series'? "pageSelected":null}>Séries</Link>
                </li>
                <li>
                    <Link to="/Movies" className={page==='Movies'? "pageSelected":null}>Filmes</Link>
                </li>
                <li>
                    <Link to="/Latest" className={page==='Latest'? "pageSelected":null}>Bombando</Link>
                </li>
                <li>
                    <Link to="/" className={page==='2'? "pageSelected":null}>Minha lista</Link>
                </li>
                <li>
                    <Link to="/" className={page==='M33ovies'? "pageSelected":null}>Idiomas e legendas</Link>
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