import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostId } from 'src/app/views/main-profile/main-profile.component';
import { PostService } from '../../services/post/post-service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public postId: PostId
  ) { }

  ngOnInit(): void {
  }

  onDeletePost(): void {
    // Rien pour l'instant
  }

  onCloseDialog(): void {
    this.dialog.closeAll();
  }
}
