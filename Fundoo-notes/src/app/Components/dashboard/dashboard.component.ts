//import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  toggle = true;
  status = 'Enable'; 
  public show:boolean = true;
  mobileQuery: MediaQueryList;
  notes: any = [];

  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 5 }, () =>
    ``);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private noteService: NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onClick($scope: any){
      $scope.myButton = 'red'; 
      $scope.changeCol = function () { 
          $scope.myButton = "green"; 
      }; 
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}
}
