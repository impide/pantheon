import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { NgxMasonryComponent } from 'ngx-masonry';
import { Observable } from 'rxjs';
import { AddPostComponent } from 'src/app/core/layout/add-post/add-post.component';
import { DeletePostComponent } from 'src/app/core/layout/delete-post/delete-post.component';
import { Data } from 'src/app/core/models/data/data-model';
import { PostModel } from 'src/app/core/models/post/post-model';
import { PostService } from 'src/app/core/services/post/post-service';

import { CardFeatureStoreState } from 'src/app/core/store/profil-cards-store';
import { CardFeatureStoreActions } from 'src/app/core/store/profil-cards-store';
import { CardFeatureStoreSelectors } from 'src/app/core/store/profil-cards-store';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {
  cards$: Observable<Data['result']>;

  constructor(
    public dialog: MatDialog,
    private postService: PostService,
    private store: Store<{ card: CardFeatureStoreState.State }>
  ) { }

  ngOnInit(): void {
    this.cards$ = this.store.pipe(select(CardFeatureStoreSelectors.selectAll));
  }

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  onCreatePost(): void {
    this.dialog.open(AddPostComponent, {
      panelClass: ['col-4']
    });
  }

  onDeletePost(id: string): void {
    this.dialog.open(DeletePostComponent, {
      panelClass: ['col-4'],
      data: {
        _id : id
      }
    });
  }
}

export interface PostId {
  _id: string;
}