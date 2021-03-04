import { Component, OnInit, Input, Output } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  public show: boolean = true;
  public isArchived:boolean = false;

  constructor(private noteService: NoteService) { }

  @Input() noteId: any;
  @Input() IsTrash: any;
  @Input() IsUnArchive: any;

  ngOnInit(): void {
  }

  onClick(){
    if(true){
      this.getArchive();
    }
    else{
      this.isArchived;
    }
  }

  getArchive() {
   
    let data = {
      "noteIdList": [this.noteId.id],
      "isArchived": true,
    }
    console.log(data)
    this.noteService.archive(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }

  unArchive() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isArchived": false,
    }
    console.log(data)
    this.noteService.archive(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }

  deleteNote() {
    console.log(this.noteId);
    let data = {
      "noteIdList": [this.noteId.id],
      "isDeleted": true,
    }
    console.log(data)
    this.noteService.deleteNotes(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }

  restoreNote() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isDeleted": false,
    }
    console.log(data)
    this.noteService.deleteNotes(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }

  deleteForever(){
    let data = {
      "noteIdList": [this.noteId.id],
      "isDeleted": true,
    }
    this.noteService.deleteForeverNotes(data).subscribe(res =>{
      console.log("Success", res)
    },
    error =>{
      console.log("Error", error)
    })

  }
}
