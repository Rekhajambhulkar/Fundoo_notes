import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NoteService} from '../../../service/noteService/note.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  
  @Output() update = new EventEmitter<any>();

  constructor(private noteService: NoteService, public dialog: MatDialog,public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("data", data)
      this.title = data.title,
      this.description = data.description,
      this.id = data.id;      
     }

  ngOnInit(): void {
  }  

  updateNote() {
    let requestData = {
      noteId: this.id,
      title: this.title,
      description: this.description,     
    }
    console.log("printing ", requestData );
    
    this.noteService.updateNote(requestData).subscribe((response:any) => {
      console.log(" updated successfull", response);
      this.update.emit();
      this.onNoClick();
    })
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
