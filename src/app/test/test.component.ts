import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public IsDisplay=false;
  public name='';
  public greeting=""; 
  public SuccessClass='text-success';
  public HasError=false;
  public IsSpecial=true;
  public MessageClasses={
    'text-success':!this.HasError,
    'text-danger':this.HasError,
    'text-special':this.IsSpecial
  }
  public titleStyle={
    color:"red",
    fontStyle:"itallic"
  }
  constructor() { }

  ngOnInit() {
  }

  logMessage(input:string){
    console.log(input);

  }

}
