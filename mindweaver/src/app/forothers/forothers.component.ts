import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-forothers',
  templateUrl: './forothers.component.html',
  styleUrls: ['./forothers.component.css']
})
export class ForothersComponent implements OnInit {

  constructor(private db: DbService) {}

  ngOnInit() {
  }

}
