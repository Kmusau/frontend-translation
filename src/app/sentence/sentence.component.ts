import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sentence } from '../models/sentence';
import { SentenceService } from '../services/sentence.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  closeResult = '';

  public sentences: Sentence[] = [];
  page: number = 1;
  total: number = 0;
  size: number = 10;

  constructor(private sentenceService: SentenceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllSentences();
  }

  /**
   * getAllSentences
   */
  public getAllSentences() {
    this.sentenceService.getAllSentences(this.page, this.size).subscribe(
      (response: Sentence[]) => {
        this.sentences = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /**
   * getTotalSentences
   */
  public getTotalSentences() {
    this.sentenceService.getTotalSentences().subscribe(
      (response) => {
        this.total = response.length;
        console.log(this.total);
      }
    );
  }

  pageChangeEvent(event: number) {
    this.page = event;

    this.getAllSentences();
  }

  /**
   * translateSentence
   */
  public translateSentence(id: number, translateForm: NgForm) {
    this.sentenceService.translateSentence(id, translateForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
