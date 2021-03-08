import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service'
import { DataserviceService } from '../../service/dataService/dataservice.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  card:any = '';
  public show: boolean = true;
  public isArchived: boolean = false;
  status = 'Enable';

  public colors: any[] = ["red", "orange", "yellow", " blue"];
  // colorss: any[] = [
  //   {
  //     "color": "red"},
  //   {
  //     "color": "orange"
  //   },
  //   {
  //     "color": "yellow"
  //   },
  //   {
  //     "color": "pink"
  //   },
  //   {
  //     "color": "blue"
  //   }
  // ];

  constructor(private noteService: NoteService, private dataService: DataserviceService) { }
  @Output() refreshNote = new EventEmitter<any>();

  @Input() noteId: any;
  @Input() IsTrash: any;
  @Input() IsUnArchive: any;

  @Output() backgroundColor = new EventEmitter<any>();

  ngOnInit(): void { }
  getArchive() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isArchived": true,
    }
    console.log(data)

    this.noteService.archive(data).subscribe(res => {
      console.log("Success", res)
      this.dataService.changeMessage("Archive")
      this.refreshNote.emit();
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
      this.dataService.changeMessage("unArchive")
      this.refreshNote.emit({ M: 'Note unarchive successfully' });
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
      this.dataService.changeMessage("deleted")
      this.refreshNote.emit({ M: 'Note deleted successfully' });

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
      this.dataService.changeMessage("restore")
      this.refreshNote.emit({ M: 'Note restore successfully' });
    },
      error => {
        console.log("Error", error)
      })
  }

  deleteForever() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isDeleted": true,
    }
    this.noteService.deleteForeverNotes(data).subscribe(res => {
      console.log("Success", res)
      this.dataService.changeMessage("deleted");
      this.refreshNote.emit({ M: 'Note deleted successfully' });
    },
      error => {
        console.log("Error", error)
      })
  }
  
 bgColor(){
  let data = {
    "noteIdList": [this.noteId],
    "color": this.colors
  }
  this.noteService.changeNoteColor(data).subscribe(res =>{
    console.log("Success", res)
    this.backgroundColor.emit(this.colors);
  },
  error =>{
    console.log("Error", error)
  })
      
   }
}

