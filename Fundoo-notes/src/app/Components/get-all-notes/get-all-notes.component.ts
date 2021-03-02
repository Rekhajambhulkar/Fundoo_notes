import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notes: any = [];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNote();
  }

  getNote() {
    this.noteService.getNotes().subscribe(res => {
      console.log("Success", res['data'].data)
      this.notes = res['data'].data;
      console.log(this.notes)
    },
      error => {
        console.log("Error", error)
      })
  }
}
