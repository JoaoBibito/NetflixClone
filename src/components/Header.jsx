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
                    <Link to="/" style={page==='inicio'?{fontWeight:'bold'}:null}>Inicio</Link>
                </li>
                <li>
                    <Link to="/Series" style={page==='series'?{fontWeight:'bold'}:null}>Séries</Link>
                </li>
                <li>
                    <Link to="/" style={page==='filmes'?{fontWeight:'bold'}:null}>Filmes</Link>
                </li>
                <li>
                    <Link to="/" style={page==='bombamdo'?{fontWeight:'bold'}:null}>Bombando</Link>
                </li>
                <li>
                    <Link to="/" style={page==='mylist'?{fontWeight:'bold'}:null}>Minha lista</Link>
                </li>
                <li>
                    <Link to="/" style={page==='legends'?{fontWeight:'bold'}:null}>Idiomas e legendas</Link>
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