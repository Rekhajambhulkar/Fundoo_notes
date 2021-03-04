import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notes: any = [];

  note:any = [];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
   
      this.getNote();
  }

  getNote() {
    this.noteService.getNotes().subscribe(res => {
    
      console.log("Success", res['data'].data)
      this.note = res['data'].data;
      this.notes = this.note.filter((element:any)=>{
       // console.log(element.isDeleted);
        
        return element.isDeleted == false && element.isArchived == false ;
      })
    })
    console.log(this.notes)
  }

  getNotes(event: any){
    console.log(event);
    this.getNote();
  }
}
