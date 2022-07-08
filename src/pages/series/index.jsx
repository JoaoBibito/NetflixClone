import React,{useState, useEffect} from 'react'
import './index.css';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';
export default ()=>{

    let page ='series';
    const [featuredData,setFeaturedData]=useState(null);   
    const [blackHeader,setBlackHeader] = useState(false);
    const [serieList,setSerieList] = useState([]);

    useEffect(()=>{
        const loadAll = async()=>{
            //get films list
            let list  = await Tmdb.getSeries();
            setSerieList(list);

            //getFeatured
        }
        loadAll();
    },[])

    return (
        <div className='page'>
            <Header black={blackHeader} page={page}/> 
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