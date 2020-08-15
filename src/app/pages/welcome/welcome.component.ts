import { Component, OnInit } from '@angular/core';

interface PictureBookModel {
  pictureBookName: string;
  pictureBookStatus: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loading = true;
  listOfData: PictureBookModel[] = [];
  constructor() { }

  ngOnInit() {
    this.listOfData = [
      {
        pictureBookName: 'Sample Picture Book',
        pictureBookStatus: 'Success'
      },
      {
        pictureBookName: 'Demo Picture Book',
        pictureBookStatus: 'Success'
      },
      {
        pictureBookName: 'Discarded Picture Book',
        pictureBookStatus: 'Failure'
      },
      {
        pictureBookName: 'Nobody\'s Picture Book',
        pictureBookStatus: 'Pending'
      },
      {
        pictureBookName: 'Sample Picture Book 2',
        pictureBookStatus: 'Success'
      }
    ];
  }

}
