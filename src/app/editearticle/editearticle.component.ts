import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-editearticle',
  templateUrl: './editearticle.component.html',
  styleUrls: ['./editearticle.component.css']
})
export class EditearticleComponent {
  constructor(private articleService:ArticleService,
    private route: ActivatedRoute
    ){}
  articleForm! :FormGroup;
  article:any;
  id: any;

  ngOnInit(){
 // First get the product id from the current route.
 const routeParams = this.route.snapshot.paramMap;
  this.id = Number(routeParams.get('articleID'));
  console.log(this.id); 
  this.articleService.findarticle(this.id).subscribe(
    (article)=>{
      this.article=article
      this.articleForm = new FormGroup({
        title: new FormControl(this.article.title),
        body: new FormControl(this.article.body),
        author: new FormControl(this.article.author),
      });
      console.log(this.articleForm.value)
      console.log(article)

    }
  )
  }
onSubmit(){
this.articleService.updatearticle(this.articleForm.value, this.id).subscribe(
  (article)=> {
    console.log("Article updated")})
}
updaTE(){
  this.articleService.updatearticle(this.articleForm.value, this.id).subscribe(
    (article)=> {
      console.log("Article updated")})
  }
}
