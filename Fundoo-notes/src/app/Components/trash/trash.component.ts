import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
public isTrash = true;
  notes: any = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrash();
  }

  getTrash() {
    this.noteService.delete().subscribe(res => {
      console.log("Success", res['data'].data)
      this.notes = res['data'].data;
    },
      error => {
        console.log("Error", error)
      })
  }
}
