export class Movie{
    public Title:string;
    public ReleaseDate: Date = new Date();
    public Favorite: boolean = false;
    public Rated: string = '';
    public Runtime: string  = '';
    public Genre: string = '';
    public Director: string = '';
    public Writer: string = '';
    public Actors: string = '';
    public Plot: string = '';
    public Language: string = '';
    public Country: string = '';
    public Type: string = 'Movie';
    public Poster:string;

    constructor(title: string, type:string, favorite: boolean, poster: string){
        this.Title = title;
        this.Favorite = favorite;
        this.Type = type;
        this.Poster = poster;
    }
   
}