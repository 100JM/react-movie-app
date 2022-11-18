import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Detail() {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState({});

    const getMoiveDetail = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        
        setMovieInfo(json.data.movie);
        console.log(json.data.movie);
        
    };

    useEffect(() => {
        getMoiveDetail();
    }, [])
    
    return <h1>
                <a href={movieInfo.url} target='blank'>{movieInfo.title}</a>
            </h1>;

}

export default Detail;