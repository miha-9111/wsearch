import { Component } from '@angular/core';
import { WikipediaService } from "./wikipedia.service";

export interface Search {
  title: string;
  snippet: string;
  pageid: number;
  wordcount?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages: Search[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
      console.log(pages);
    });
  }
}
