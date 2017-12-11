import { Component, OnInit } from '@angular/core';
import { log } from 'util';

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'http://thecatapi.com/api/images/get?format=src',
    fontsize: 40
  };

  public src: string;

  constructor() { }
  
  ngOnInit() {
    this.generateSrc();
  }
  
  public generateSrc(): void {
    fetch(this.image.api)
      .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. ' + response.status);
            return;
          }

          this.src = response.url;
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }
}
