import React,{useState, useEffect} from 'react'
import './index.css';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';

export default ()=>{

    const [blackHeader,setBlackHeader] = useState(false);
    const [movieList,setMovieList]=useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(()=>{
        const loadAll= async()=>{
            let list = await Tmdb.getPopular();
            setMovieList(list);

            let randomChoseKind =Math.floor(Math.random()*(list.length-1));
            let randomChoseOne=  Math.floor(Math.random()*(list[randomChoseKind].items?.results.length));
            let chose = list[0].items?.results[randomChoseOne];
            let choseInfo=await Tmdb.getMovieInfo(chose.id,'movie');
            setFeaturedData(choseInfo);
        }
        loadAll();
    },[])
    useEffect(()=>{
        const scrollListener=()=>{
            if(window.scrollY>10){
                setBlackHeader(true)
            }
            else{
                setBlackHeader(false)
            }
        }
        window.addEventListener('scroll', scrollListener);
        return ()=>{
            window.removeEventListener('scroll', scrollListener)
        }
    },[])

    return(
        <div className='page'>
            <Header black={blackHeader} page={"Latest"}/>
            {featuredData &&
            <FeaturedMovie item={featuredData}/>}
            <section className='movieList'>
                {movieList &&
                movieList.map((item,key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
};