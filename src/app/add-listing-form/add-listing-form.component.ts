import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  public propertyTypes:Array<string> = ['Housing', 'Commercial'];
  @ViewChild('newCribForm') newCribForm: NgForm;

  constructor( private cribsService:CribsService) { }

  ngOnInit() {
  }
  onCribSubmit(e):void{
    this.cribsService.addCrib(e);
    this.newCribForm.reset();
  }

}
