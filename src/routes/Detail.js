import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import styles from './Detail.module.css';

function Detail() {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const getMoiveDetail = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        
        setMovieInfo(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMoiveDetail();
    }, [])
    
    return (
            <div>
                <div className={styles.backgound}> 
                    <img className={styles.detail_img} src={movieInfo.background_image_original} alt=""/>
                </div>
                {
                    loading ?
                    <div className={styles.loader}>
                        <span>Loading...</span>
                    </div>
                    :
                    <div className={styles.detail_info}>
                        <div className={styles.info}>
                            <div className={styles.info_img}>
                                <img src={movieInfo.medium_cover_image} alt=""/>
                            </div>
                            <div className={styles.info_movie}>
                                <h3>
                                    {movieInfo.title}
                                </h3>
                                <p>{movieInfo.rating ? `Rating : ${movieInfo.rating} / 10` : 'Rating : -'}</p>
                                <p>{movieInfo.runtime ? `Runtime : ${movieInfo.runtime} min` : 'Runtime : -'}</p>
                                {
                                    movieInfo.genres ?
                                        <div>
                                            <span>Genres</span>
                                            <ul>
                                            {movieInfo.genres.map(g=><li key={g}>{g}</li>)}
                                            </ul>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        {
                            movieInfo.description_full ?
                            <div className={styles.description}>
                                <p>{movieInfo.description_full}</p>
                            </div>
                            :
                            null
                        }
                    </div>
                }
            </div>
            );

}

export default Detail;