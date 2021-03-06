const api_key="5309aa1a6b956f01181ba1940ffc2a89";
const api_base="https://api.themoviedb.org/3";

/*
- originais
- Recomendados (tranding)
- Em alta
- Ação
- Comédia
- Terror
- Romance
- Documentarios
*/

let getFetch = async(endpoint)=>{
     const req= await fetch(`${api_base}${endpoint}`)
    const json = await req.json();
    return json;   
   
}
const basicFetch = async(endpoint)=>{
    let list = [];
    let json={};
    for(let i = 1; i<5;i++){
        const req= await fetch(`${api_base}${endpoint}&page=${i}`)
        json = await req.json();
        json.results.map((item,key)=>{
            list.push(item);
        })
    }
    return {
        page:1,
        results:list,
        total_pages:json.total_pages,
        total_results:json.total_results
    }
}
export default{
    getHomeList:async ()=>{
        return[
            {
                slug: 'Originals',
                title: 'Originais Netfflix',
                items:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Toprated ',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Action ',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`)
            }
        ]
    },
    getMovieInfo: async (movieId,type)=>{
        let info={};
        if(movieId){
            switch(type){
                case 'movie':
                    info=await getFetch(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`)
                break;
                case 'tv':
                    info=await getFetch(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`)
                break; 
                default:
                    info=null;
                break;
            }
        }
        return info;
    },   
    getSeries: async()=>{//genre/tv/list?api_key=${api_key}&language=pt-BR
       return [
            {
                slug:"Series",
                title:"Series",
                items:await getFetch(`/discover/tv?api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:"Popular",
                title:"Popular",
                items:await basicFetch(`/tv/popular?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Comedy",
                title:"Comédia",
                items:await basicFetch(`/discover/tv?with_genres=35&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Animation",
                title:"Animação ",
                items:await basicFetch(`/discover/tv?with_genres=16&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Kids",
                title:"Infantil",
                items:await basicFetch(`/discover/tv?with_genres=10762&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Drama",
                title:"Drama",
                items:await basicFetch(`/discover/tv?with_genres=18&language=pt-BR&api_key=${api_key}`)
            }
        ];
    },
    getMovies:async()=>{
        return[
            {
                slug:"Movies",
                title:"Filmes",
                items:await getFetch(`/discover/movie?api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:"Popular",
                title:"Popular",
                items:await basicFetch(`/movie/popular?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Action ',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`)
            }
        ];
    },
    getPopular:async()=>{
        return [
            {
                slug:"Popular Movies",
                title:"Filmes populares",
                items:await basicFetch(`/movie/popular?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Popular Series",
                title:"Séries populares",
                items:await basicFetch(`/tv/popular?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Tranding movies",
                title:"Filmes recomendados",
                items: await basicFetch(`/trending/movie/week?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Tranding series",
                title:"Séries recomendadas",
                items:await basicFetch(`/trending/tv/week?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:"Tranding series",
                title:"Séries recomendadas",
                items:await basicFetch(`/trending/tv/week?language=pt-BR&api_key=${api_key}`)
            },
            {                
                slug: 'Toprated movies',
                title: 'Filmes em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },
            {                
                slug: 'Toprated series',
                title: 'Séries em alta',
                items: await basicFetch(`/tv/top_rated?language=pt-BR&api_key=${api_key}`)
            }
        ]
    }
}