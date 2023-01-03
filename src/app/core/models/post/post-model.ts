export class PostModel {
    _id: string;
    content: (boolean|string)[];
    path : string;
    creator: string;
    createdAt: Date;
}