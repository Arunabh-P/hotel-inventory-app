import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JBCUPoJN30eWH7CqsU7x4q74x5uTbR3w1GPP57Qy&s',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5333,
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JBCUPoJN30eWH7CqsU7x4q74x5uTbR3w1GPP57Qy&s',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 5.345,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JBCUPoJN30eWH7CqsU7x4q74x5uTbR3w1GPP57Qy&s',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.1234,
    },
  ];

  constructor() {}
  getRooms() {
    return this.roomList;
  }
}
