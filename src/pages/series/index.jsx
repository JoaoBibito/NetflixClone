import React,{useState, useEffect} from 'react'
import './index.css';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';
export default ()=>{

    const [featuredData,setFeaturedData]=useState(null);   
    const [blackHeader,setBlackHeader] = useState(false);
    const [serieList,setSerieList] = useState([]);

    useEffect(()=>{
        const loadAll = async()=>{
            //get films list
            let list  = await Tmdb.getSeries();
            setSerieList(list);

            //getFeatured
            let randomChoseKind = Math.floor(Math.random()*(list.length-1))//Math.floor((Math.random()*(list.length-1))/10);
            let randomChoseSerie =Math.floor(Math.random()*(list[randomChoseKind].items?.results.length));
            let chose = list[randomChoseKind].items?.results[randomChoseSerie];
            let choseInfo = await Tmdb.getMovieInfo(chose.id, 'tv');
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
        return()=>{
            window.removeEventListener('scroll', scrollListener)
        }
    })

    return (
        <div className='page'>
            <Header black={blackHeader} page={"Series"}/> 
            {featuredData && <FeaturedMovie item={featuredData}/>}
            <section className='seriesList'>
                {serieList.map((item,key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
            {serieList.length <=0 &&
            <div className='loading'>
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
            </div>}
       </div>       
    )
}