import { Component, OnInit , Input} from '@angular/core';
import {NoteService} from '../../service/noteService/note.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  public show: boolean = true;

  constructor(private noteService: NoteService ) {
    
   }

   @Input() noteId: any;

  ngOnInit(): void {
  }

  onclick(){
    this.getArchive();
  }

  getArchive(){
    let data ={
      "noteIdList" : [this.noteId.id],
      "isArchived": true,  
    }
   console.log(data)
    this.noteService.archive(data).subscribe(res =>{
    console.log("Success", res)
    },
    error =>{
      console.log("Error", error)
    })
  } 

  deleteNote(){
    console.log(this.noteId);
    let data ={
      "noteIdList" : [this.noteId.id],
      "isDeleted": true,  
    }
   console.log(data)
    this.noteService.deleteNotes(data).subscribe(res =>{
    console.log("Success", res)
    },
    error =>{
      console.log("Error", error)
    })
  }
}
