import React,{useState, useEffect } from 'react';
import "./index.css"
import Tmdb from "../../Tmdb";
import MovieRow from "../../components/MovieRow";
import Header from "../../components/Header";
import FeaturedMovie from '../../components/FeaturedMovie';

export default ()=>{
    const [movieList, setMovieList] = useState([]);
    const [featured, setFeaturedData] = useState(null);
    const [blackHeader,setBlackHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async()=>{

            let list = await Tmdb.getMovies();
            setMovieList(list);

            let randomChoseKind = Math.floor(Math.random()*(list.length-1));
            let randomChoseMovie = Math.floor(Math.random()*(list[randomChoseKind].items?.results.length));
            let chose= list[randomChoseKind].items?.results[randomChoseMovie];
            let choseInfo=await Tmdb.getMovieInfo(chose.id,'movie');
            setFeaturedData(choseInfo);
        }
        loadAll();
    },[])

   
    useEffect(()=>{
        const scrollListener=()=>{
            if(window.scrollY>10){
                setBlackHeader(true);
            }
            else{
                setBlackHeader(false)
            }
            window.addEventListener("scroll",scrollListener);
            return()=>{
                window.removeEventListener("scroll",scrollListener)
            }
        }
    },[])

    return (
        <div className='page'>
            <Header black={blackHeader} page={"Movies"}></Header>
            
                {featured && 
                <FeaturedMovie item={featured}/>}
                <section className='movieList'>
                    {movieList &&
                    movieList.map((item, key)=>(
                        <MovieRow key={key} title={item.title} items={item.items}/>
                    ))}
                </section>
                <foorter>
                    Feito com <span role="img" aria-label="coração">❤️</span><br/>
                    Direitos reservados para Netflix<br/>
                    Dados retirados do site 'themoviedb.org'
                </foorter>
                {movieList.length <=0 &&
                <div className='loading'>
                     <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
                </div>}            
        </div>
    )
}