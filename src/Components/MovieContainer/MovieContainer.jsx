import styles from './movieContainer.module.css'
import Data from '../../Data';
import CardComponent from '../CardComponent/CardComponent';
const Moviecontainer = () => {
    return (
        <>
            <div className={styles.mContainer}>
                {
                    Data.map((ele,idx) => 
                        <CardComponent key={idx} poster={ele.poster} title={ele.title} releaseYear={ele.releaseYear} director={ele.director} genre={ele.genre} description={ele.description} imdbRating={ele.imdbRating} />
                    )
                }
            </div>
        </>
    )
}

export default Moviecontainer