import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
url:string = 'http://127.0.0.1:3000';
  constructor(private http:HttpClient) { }
  
  listarticles(){
return this.http.get(this.url+'/api/v1/articles')
  }
  httpOptions={  
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  addarticle(data:any){
    return this.http.post(this.url+'/api/v1/articles', data, this.httpOptions)
  }
  findarticle(id:any){
    return this.http.get(this.url+'/api/v1/articles/'+id);

  }
  updatearticle(data:any, id:any){
    return this.http.put(this.url+'/api/v1/articles/'+id, data, this.httpOptions)
  }
  deletearticle(id:any){
    return this.http.delete(this.url+'/api/v1/articles/'+id);
  }

}
