import  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import styles from "./Home.module.css";

function Group(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {group} = useParams();

    const getMovies = async() => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?${group}&sort_by=year`
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getMovies();
        return ;
        //group 값이 바귈때마다 렌더링
    }, [group])
    
    return(
        <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
            <div className={styles.movies}>
                {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
                ))}
            </div>
        )}
      </div>
    );
}

export default Group;