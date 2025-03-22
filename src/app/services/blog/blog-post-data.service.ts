import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as yaml from 'js-yaml';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostDataService {
  private data: any;

  constructor(private http: HttpClient) {}

  async loadData(): Promise<any> {
    try {
      const yamlText = await firstValueFrom(this.http.get('/assets/data/blog/blogs/.en.yaml', { responseType: 'text' }));
      this.data = yaml.load(yamlText);
      return this.data;
    }
    catch(error: any) {
      console.error('Failed to load YAML file:', error);
      throw error;
    };
  }

  getData(): any {
    return this.data;
  }
}