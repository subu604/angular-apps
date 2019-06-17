import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, stagger, keyframes, query} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations:[
  //   trigger
  // ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals=[];
  goalText: string =' This is what to do';

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;    
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount = this.goals.length;    
  }

}
