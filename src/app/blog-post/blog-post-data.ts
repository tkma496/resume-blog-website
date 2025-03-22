import { BlogPostDataModel } from './blog-post-data-model';

export class BlogPostData implements BlogPostDataModel {

    blog = {
    blog_list: [],
    }
  
    constructor(data?: Partial<BlogPostDataModel>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }