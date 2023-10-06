import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(private authService:AuthServiceService ){}
  
  addPost(text: string){
    
    this.authService.addPost(text).subscribe();
  }

}
