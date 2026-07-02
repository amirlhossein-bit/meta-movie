import MovieCarousel from "../../components/movie/MovieCarousel";
import { movieService } from "../../services/movie.service";
import MainHero from "./MainHero";

const HomePage = () => {
    return ( 
    <>
    <div className="">
        <MainHero/>
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    </div>
    </> );
}
 
export default HomePage;