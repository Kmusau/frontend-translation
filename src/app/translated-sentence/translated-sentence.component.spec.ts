import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedSentenceComponent } from './translated-sentence.component';

describe('TranslatedSentenceComponent', () => {
  let component: TranslatedSentenceComponent;
  let fixture: ComponentFixture<TranslatedSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatedSentenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslatedSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
