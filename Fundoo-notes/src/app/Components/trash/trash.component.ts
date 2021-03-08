import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service'
import {DataserviceService} from '../../service/dataService/dataservice.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
public isTrash = true;
  notes: any = [];
   
  constructor(private noteService: NoteService, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.getTrash();
    this.dataService.currentMessage.subscribe((msg) => {
      console.log(" message ", msg);
      this.getTrash();
    })
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
