import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject, Subscription, take } from "rxjs";
import { environment } from "src/environments/environment";
import { Data } from "../../models/data/data-model";
import { PostModel } from "../../models/post/post-model";
import { SnackbarService } from "../snackbar-service";

@Injectable({ providedIn: 'root' })
export class PostService {
    // Auth Data
    private api = environment.api;
    token!: string;
    userId!: string;

    // Observable Posts
    posts: PostModel[];
    posts$ = new Subject<PostModel[]>();

    constructor(
        private http: HttpClient,
        private snackbar: SnackbarService
    ) { }

    // Get all Posts
    getAllPosts(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>(`${this.api}/posts/`);
    };

    // Create a Post
    // addOnePost(post: PostModel, image: File) {
    //     let postData: FormData = new FormData();
    //     postData.append('post', JSON.stringify(post));
    //     postData.append('image', image);
        
    //     return this.http.post<PostModel>(`${this.api}/posts/add-post`, postData);
    // };

    // Teste
    addPostTest(post: PostModel, image: File){
        let postData: FormData = new FormData();
        postData.append('post', JSON.stringify(post));
        postData.append('image', image);

        return this.http.post(`${this.api}/posts/add-post`, postData).subscribe(
            {
                next: () => {
                    console.log("OK tout va bien");
                },
                error: () => {
                    console.log("Tout va mal");
                }
            }
        )
    }

    // Delete a Post
    deleteOnePost(cardId: number) {
        return this.http.delete<PostModel>(`${this.api}/posts/${cardId}`);
    }
}