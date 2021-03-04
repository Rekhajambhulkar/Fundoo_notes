import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../service/noteService/note.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})

export class ArchiveComponent implements OnInit {
  notes:any = [];
  public isUnArchive = true;

  constructor(private noteService: NoteService) { }
 

  ngOnInit(): void {
    this.getArchive();   
  }

  getArchive(){
    this.noteService.archiveNotes().subscribe(res => {
      console.log("Success", res['data'].data)
      this.notes = res['data'].data;
    },
    error =>{
      console.log("Error", error)
    })   
  }

  

}
