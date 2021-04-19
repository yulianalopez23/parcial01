import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {

  @Input() message: string;
  constructor(

  ) { 
  }

  ngOnInit(): void {
  }

}
