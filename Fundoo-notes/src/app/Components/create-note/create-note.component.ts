import { Component,Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';
 
@Component({ 
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})

export class CreateNoteComponent implements OnInit {
  description: string;
  title: string;
  color = '';
  isOpen = true;

  public show: boolean = true;
  public buttonName: any = "Title";
  constructor(private noteService: NoteService) {
    this.title = "",
    this.description = ""
  }

  @Output() refreshNote = new EventEmitter<any>();

  ngOnInit(): void {}

  onClick() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE field.
    if (this.show)
      this.buttonName = "Take a note";
    else
      this.buttonName = "Title"; }

  closeWindow() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Take a note";
    else
      this.buttonName = "Title";
    console.log('closing');
    this.addNote() }

  addNote(): void {
    let obj = {
      "title": this.title,
      "description": this.description,
    }
    this.noteService.createNote(obj).subscribe((res) => {
      console.log("Success", res)
      this.refreshNote.emit({M: 'Note created successfully'});
    }, (error) => {
      console.log("Error", error)
    })
  }

  backgroundColor(colors: any){
    console.log(colors);
  }
}

