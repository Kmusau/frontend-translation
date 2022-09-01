import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioService } from '../services/audio.service';
import { Audio } from '../models/audio';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  title = 'wav-voice';

  //Lets initiate Record OBJ
  public record: any;
  //Will use this flag for detect recording
  public recording = false;
  //Url of Blob
  public url: any;
  public error: any;

  public audios: Audio[] = [];

  constructor(
    private domSanitizer: DomSanitizer,
    private audioService: AudioService
  ) {}

  ngOnInit(): void {
    this.getAudios();
  }

  public getAudios(): void {
    this.audioService.getAudios().subscribe(
      (response: Audio[]) => {
        this.audios = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public onAddStudent(addForm: NgForm): void {
  //   document.getElementById("close-button").click();
  //   this.audioService.recordAudio().subscribe(
  //     (response: Audio) => {
  //       console.log(response)
  //       this.getAudios();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   );
  // }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Start recording.
   */
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream: any) {
    var options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob: any) {
    this.url = URL.createObjectURL(blob);
    //  this.url = `blob:http://localhost:4200/18ba0fde-59f4-4026-ae9b-133a3cbef104`;
    console.log(blob);
    console.log(this.url);

    this.audioService.sendAudioFile(blob);

    // this.audioService.recordAudio(fd).subscribe(
    //   (response: Audio) => {
    //     console.log(response);
    //     this.getAudios();
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }
  /**
   * Process Error.
   */
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }

}
