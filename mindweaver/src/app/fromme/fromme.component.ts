import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-fromme',
  templateUrl: './fromme.component.html',
  styleUrls: ['./fromme.component.css']
})
export class FrommeComponent implements OnInit {
  
  constructor(private db: DbService) {}

  ngOnInit() {
  }

}
