import { Component, OnInit } from '@angular/core';
import { MainPageLists, MasteriesLists, PageLists } from 'src/app/core/data/main-page-lists';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {
  masteries: MasteriesLists[] = MasteriesLists;
  pagesLists: PageLists[] = MainPageLists;

  constructor() { }

  ngOnInit(): void {
  }
}