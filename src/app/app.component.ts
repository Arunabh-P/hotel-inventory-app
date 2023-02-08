import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  OnInit,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>template helloo</h1>
  //   <p>how is he</p>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-app';

  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit() {
    this.name.nativeElement.innerText = 'Hilton Hotel  ';
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  //  ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 35;
  // }
}
