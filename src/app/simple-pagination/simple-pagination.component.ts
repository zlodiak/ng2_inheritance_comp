import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-simple-pagination',
  templateUrl: './simple-pagination.component.html',
  styleUrls: ['./simple-pagination.component.css']
})
export class SimplePaginationComponent {

  @Input() 
  pageCount: number;

  @Input()
  page: number;

  @Output()
  pageChanged = new EventEmitter<number>();

  nextPage() {
  	console.log('nextPage');
    this.page ++;
    this.pageChanged.emit(this.page);
  }

  previousPage() {
  	console.log('previousPage');
    this.page --;
    this.pageChanged.emit(this.page);
  }

  hasPrevious(): boolean { return +this.page > 1; }

  hasNext(): boolean { return +this.page < +this.pageCount; }

}
