import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  userId: string;
  post$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.userId = params.id
    );
   }

  ngOnInit() {
    this.data.getPosts(this.userId).subscribe(
      data => this.post$ = data
    );
  }

}
