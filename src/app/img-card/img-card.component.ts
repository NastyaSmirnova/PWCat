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
    // api: 'https://thecatapi.com/api/images/get?format=src',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;

  constructor() { }
  
  ngOnInit() {
    this.generateSrc();
  }
  
  public generateSrc(): void {
    var url = this.image.api + this.image.message + 
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();

    this.src = url;

    // fetch(url)
    //   .then(response => {
    //       if (response.status !== 200) {
    //         console.log('Looks like there was a problem. ' + response.status);
    //         return;
    //       }

    //       console.log(response);

    //       this.src = response.url
    //     }
    //   )
    //   .catch(err => console.log('Fetch Error :-S', err));
  }
}
