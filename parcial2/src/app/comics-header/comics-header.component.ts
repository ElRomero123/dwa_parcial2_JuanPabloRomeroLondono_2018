import { Component, OnInit } from '@angular/core';
import { ComicsGridComponent } from '../comics-grid/comics-grid.component';

@Component({
  selector: 'app-comics-header',
  templateUrl: './comics-header.component.html',
  styleUrls: ['./comics-header.component.scss'],
  providers: [ ComicsGridComponent ],
})
export class ComicsHeaderComponent implements OnInit {

  public grid: ComicsGridComponent;
  constructor() { }

  actualizar()
  {
    this.grid.showWith('Sp');
  }
  
  ngOnInit() 
  {
  }
}
