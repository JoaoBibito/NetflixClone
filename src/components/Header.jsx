import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import lupa from '../imagens/lupa.png';
import sino from '../imagens/sino.png';

export default({black,page})=>{
    return (
        <header className={black?'black':''}>
            <div className='header-logo'>
                <Link to='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width="90" height="50" alt="Netflix"/>
                </Link>
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
                    <Link to="/" className={page==='3'? "pageSelected":null}>Idiomas e legendas</Link>
                </li>
            </ul>
            <div className='header-user'>
                <button>
                    <img src={lupa} alt="lupa" width="30" height="20"/>
                </button>
                <button className='btnKids'>
                    Infantil
                </button>
                <button>
                    <img src={sino} width="40" height="20" alt="sino"/>
                </button>
                <button>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"/>
                </button>
            </div>
        </header>
    )
}