import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-vreatarticle',
  templateUrl: './vreatarticle.component.html',
  styleUrls: ['./vreatarticle.component.css']
})
export class VreatarticleComponent {
  constructor(private articleService:ArticleService){}
  article:any;
  
  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
  });
  onSubmit(){
    this.articleService.addarticle(this.articleForm.value).subscribe(
      article => {
      this.article=article
  });
}
}
