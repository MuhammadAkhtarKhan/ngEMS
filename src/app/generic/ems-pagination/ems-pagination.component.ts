import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ems-pagination',
  templateUrl: './ems-pagination.component.html',
  styleUrls: ['./ems-pagination.component.scss']
})
export class EmsPaginationComponent {
  @Input() activePageNumber: any;
  @Input() maxPageCount: any;
  @Input() totalPages: number = 5;
  @Output('onPageChange') onPageChangeEvent = new EventEmitter();
  pages = [];
  constructor() {}
  ngOnInit(): void {}
  initPagesNumbers() {
    let startingIndex = this.initStartingIndex();
    this.pages = [];
    for (let i = 0; i < this.totalPages; i++) {
      if (startingIndex <= this.maxPageCount) {
        this.pages.push(startingIndex);
      }
      startingIndex++;
    }
  }
  initStartingIndex() {
    this.activePageNumber = parseInt(this.activePageNumber);
    if (this.activePageNumber - 2 >= 1) {
      return this.activePageNumber - 2;
    } else if (this.activePageNumber - 1 >= 1) {
      return this.activePageNumber - 1;
    } else {
      return this.activePageNumber;
    }
  }
  onPageClick(pageNumber) {
    this.emitPageValue(pageNumber);
  }
  emitPageValue(pageNumber) {
    if (this.activePageNumber == pageNumber) return;
    this.onPageChangeEvent.emit(pageNumber);
  }
  previousPage() {
    if (this.activePageNumber - 1 < 1) return;
    this.emitPageValue(this.activePageNumber - 1);
  }
  nextPage() {
    if (this.activePageNumber + 1 > this.maxPageCount) return;
    this.emitPageValue(this.activePageNumber + 1);
  }
  lastPage() {
    this.emitPageValue(this.maxPageCount);
  }
  firstPage() {
    this.emitPageValue(1);
  }
  ngOnChanges(pageNumber) {
    if (pageNumber.maxPageCount) {
      this.maxPageCount = pageNumber.maxPageCount.currentValue;
    }
    if (pageNumber.activePageNo) {
      this.activePageNumber = pageNumber.activePageNumber.currentValue;
    }
    this.initPagesNumbers();
  }
}


