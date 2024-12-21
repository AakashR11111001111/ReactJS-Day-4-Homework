import styles from './movieContainer.module.css'
import Data from '../../Data';
const Moviecontainer = () => {
    return (
        <>
            <div className={styles.mContainer}>
                {
                    Data.map((ele) => 
                        (
                        <div className={styles.card} key={ele.id}>
                            <div className={styles.upper}>
                                <img src={ele.poster} alt="" />
                                <div className={styles.metaCont}>
                                    <h1 className={styles.title}>{ele.title}</h1>
                                    <h1 className={styles.ry}>{ele.releaseYear}, {ele.director}</h1>
                                    <h2 className={styles.genre}>
                                        {ele.genre.join(", ")}
                                    </h2>
                                    <p>{ele.description}</p>
                                    <p className={styles.ir}>IMDB Rating: <span>{ele.imdbRating} / 10</span></p>
                                </div>
                                <div className={styles.links}>
                                    <svg className={styles.like} viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.5449219 4 C 5.9299219 4 3 6.9299219 3 10.544922 C 3 16.837321 10.298975 22.849799 13.708984 25.527344 A 2 2 0 0 0 13.71875 25.535156 C 13.742115 25.5535 13.773881 25.579629 13.796875 25.597656 L 13.798828 25.595703 A 2 2 0 0 0 15 26 A 2 2 0 0 0 16.203125 25.595703 L 16.203125 25.597656 C 16.209855 25.59238 16.219801 25.585381 16.226562 25.580078 C 16.231704 25.576045 16.23898 25.570455 16.244141 25.566406 A 2 2 0 0 0 16.263672 25.548828 C 19.663109 22.880904 27 16.852336 27 10.544922 C 27 6.9299219 24.070078 4 20.455078 4 C 17.000078 4 15 7 15 7 C 15 7 12.999922 4 9.5449219 4 z"/></svg>
                                    <svg className={styles.share} viewBox="0 0 30 30" width="30px" height="30px"><path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/></svg>
                                </div>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default Moviecontainer