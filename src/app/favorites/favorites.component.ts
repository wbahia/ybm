import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/movie.model'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input() public movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
