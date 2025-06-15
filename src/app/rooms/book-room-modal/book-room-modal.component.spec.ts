import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomModalComponent } from './book-room-modal.component';

describe('BookRoomModalComponent', () => {
  let component: BookRoomModalComponent;
  let fixture: ComponentFixture<BookRoomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRoomModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
