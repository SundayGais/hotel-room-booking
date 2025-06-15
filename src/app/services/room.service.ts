import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  availability: 'Available' | 'Booked';
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // IMPORTANT: Ensure this is wrapped in BACKTICKS (`) and not single/double quotes
  // and replace with your exact mockapi.io URL.
  private mockApiUrl = `https://684c5a55ed2578be881e904b.mockapi.io/hotel-room-booking-engine/rooms`;

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.mockApiUrl);
  }

  // Method to update room availability
  updateRoomAvailability(roomId: string, availability: 'Available' | 'Booked'): Observable<Room> {
    // !! IMPORTANT: Ensure this URL uses BACKTICKS (`) for string interpolation !!
    const url = `${this.mockApiUrl}/${roomId}`; // Correct way to form the URL

    // Send a PUT request with the updated availability.
    // MockAPI.io updates based on the provided fields.
    return this.http.put<Room>(url, { availability: availability });
  }
}