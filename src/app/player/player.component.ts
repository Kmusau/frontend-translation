import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Audio } from '../models/audio';
import { CloudService } from '../services/cloud.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  files: Array<any> = [];
  url1: any;
  page: number = 1;
  total: number = 0;
  size: number = 10;
  constructor(private cloudService: CloudService) {  }


  ngOnInit(): void {
    this.getAllAudios();
    this.totalNumberofAudios();
  }

  /**
   * getAllAudios
   */
  public getAllAudios() {
    this.cloudService.getFiles(this.page, this.size).subscribe(files => {
      this.files = files;
    });
  }

  /**
   * totalAudios
   */
  public totalNumberofAudios() {
    this.cloudService.getTotalAudios().subscribe(
      (response) => {
        this.total = response.length;
        console.log(this.total);
      }
    );
  }

  pageChangeEvent(event: number) {
    this.page = event;

    this.getAllAudios();
  }

  /**
   * playAudio
id: number   */
  public playAudio(id: number) {
    this.cloudService.getOneAudio(id).subscribe(
      (audio) => {

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /**
   * playSound
id: number   */
  public playSound(id: number) {
    this.cloudService.getSingleAudio(id).subscribe(
      (audio) => {
        this.url1 = "http://0.0.0.0:8080"+audio.filepath;
        console.log(this.url1);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
