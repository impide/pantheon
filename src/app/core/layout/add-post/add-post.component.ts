import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostModel } from '../../models/post/post-model';
import { PostService } from '../../services/post/post-service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  // File
  selectedImageFile: File;
  selectedImage: string;

  constructor(public dialog: MatDialog, private postService: PostService) {}

  ngOnInit(): void {}

  // Read File (image)
  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files[0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener('loadend', (ev) => {
      let readableString = fileReader.result.toString();
      let postPreviewImage = <HTMLImageElement>(
        document.getElementById('post-preview-image')
      );
      postPreviewImage.src = readableString;
      this.selectedImage = readableString;
    });
  }

  // Create & Save Post
  onCreatePost(commentInput: HTMLTextAreaElement) {
    var textContent: (boolean | string)[];
    if (commentInput.value.length !== 0) {
      textContent = [true, commentInput.value];
    } else {
      textContent = [false];
    }

    const newPost = new PostModel();
    newPost.content = textContent;
    newPost.path = this.selectedImage;
    newPost.creator = 'Tony';

    this.postService.addPostTest(newPost, this.selectedImageFile);
    this.dialog.closeAll();
  }
}
