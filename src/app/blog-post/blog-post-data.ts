import { BlogPostDataModel } from './blog-post-data-model';

export class BlogPostData implements BlogPostDataModel {

    blogData: any;

    constructor(data?: Partial<BlogPostDataModel>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }