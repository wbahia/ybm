import { Movie } from '../shared/movie.model'

export const MOVIES : Array<Movie> = [
    { Title : 'Star Wars - Episode V - Empire Strikes Back', Favorite: true, ReleaseDate: new Date(1978, 1,1)},
    { Title : 'Star Wars - Episode IV - A New Hope', Favorite: false, ReleaseDate: new Date(1977, 1, 1)},
    new Movie('Back to The Future')
]