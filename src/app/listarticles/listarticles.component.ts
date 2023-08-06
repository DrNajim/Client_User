import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
articles:any;
constructor(private articleService:ArticleService){}
ngOnInit(){
  this.articleList()
}
articleList(){
this.articles=this.articleService.listarticles().subscribe(
  article => {
  this.articles=article
  console.log(this.articles);
  })}
  deleteList(id:any){
    this.articleService.deletearticle(id).subscribe(
      article => {
      console.log("Article has been deleted");
      }
    )
    }
}
