import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.component.html',
  styleUrls: ['./favorie.component.scss']
})
export class FavorieComponent implements OnInit {

  @Input() dataFavorie !: Observable<Present[]>;

  constructor(private http : HttpClient, private service : PresentService) {}

  ngOnInit() {
    this.dataFavorie = this.service.refreshList();
  }

}

