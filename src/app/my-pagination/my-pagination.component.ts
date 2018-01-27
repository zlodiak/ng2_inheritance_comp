import { Component, Input } from '@angular/core';
import { SimplePaginationComponent } from '../simple-pagination/simple-pagination.component';


@Component({
  selector: 'app-my-pagination',
  templateUrl: './my-pagination.component.html',
  styleUrls: ['./my-pagination.component.css']
})
export class MyPaginationComponent extends SimplePaginationComponent {

  @Input()
  previousText = '<<-m'; // override default text

  // @Input()
  // nextText = '>>-m'; // override default text

}
