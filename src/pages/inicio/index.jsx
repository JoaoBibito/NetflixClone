import React,{useEffect,useState}from 'react';
import Tmdb from "../../Tmdb";
import "./index.css";
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie'
import Header from '../../components/Header'

export default ()=>{

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [blackHeader,setBlackHeader] = useState(false)
    let page = 'inicio';

    useEffect(()=>{
        const loadAll = async ()=>{
            //pega lista de filmes
            let list = await Tmdb.getHomeList();
            setMovieList(list)

            //pega o featured
            let originals =list.filter(i=>i.slug === 'Originals');
            let randomChose = Math.floor(Math.random()*(originals[0].items?.results.length-1));
            let chosen = originals[0].items.results[randomChose];
            let chosenInfo= await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
        loadAll()
    },[])

    useEffect(()=>{
        const scrollListener=()=>{
            if(window.scrollY > 10){
                setBlackHeader(true)
            }
            else{
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return ()=>{
            window.removeEventListener('scroll', scrollListener)}
    },[])

return(
    <div className='page'>
        <Header black={blackHeader} page={page}/>
        {featuredData &&
        <FeaturedMovie item={featuredData}/>}
    <section className='lists'>
        {movieList.map((item,key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
    </section>
    <footer>
        Feito com <span role="img" aria-label="coração">❤️</span><br/>
        Direitos de imagem para Netflix<br/>
        Dados retirados do site 'themoviedb.org'<br/>
    </footer>
    {movieList.length <=0 &&
    <div className='loading'>
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
    </div>}
    </div>
);
};
