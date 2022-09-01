export interface TranslatedSentence {
  translated_sentence_id: number;
  date_created: Date;
  date_modified: Date;
  translated_text: string;
  language: string;
  sentence: any;
  translated_by: string;
  status: any;
  reviewed_by: string;
}
