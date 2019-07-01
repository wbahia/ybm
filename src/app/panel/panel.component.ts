import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model'
import { MOVIES } from './movies-mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public movies : Array<Movie> = MOVIES;
  
  constructor() { console.log(this.movies)}

  ngOnInit() {
  }

}
