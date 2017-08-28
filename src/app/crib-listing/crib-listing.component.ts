import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs:Array<any>;
  error:string;
  constructor(
    private http:Http,
    private cribsservice:CribsService
    ) { }

  ngOnInit() {
    
      this.cribsservice.getAllCribs().subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      )
      this.cribsservice.newCribSubject.subscribe(
        data => this.cribs = [data, ...this.cribs]
        
      )
  }

}
