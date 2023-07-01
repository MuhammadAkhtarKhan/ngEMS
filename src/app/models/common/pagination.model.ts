export class PaginationModel {
  activePageNumber: number;
  maxPageCount: number;
  pageSize: number;
  totalResult: number;

  constructor(pageSize: number, totalResult: number) {
    this.activePageNumber = 1;
    this.pageSize = pageSize;
    this.totalResult = totalResult;
    let maxPageCount = this.totalResult / this.pageSize;
    this.maxPageCount = Math.ceil(maxPageCount);
  }
}
