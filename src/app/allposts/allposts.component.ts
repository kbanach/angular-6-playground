import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent implements OnInit {

  allposts$: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getAllPosts().subscribe(
      data => this.allposts$ = data
    );
  }

}
