export class NoteFilters {
  page: number;
  size: number;
  search: string;

  constructor(page: number, size: number, search: string) {
    this.page = page;
    this.size = size;
    this.search = search;
  }

  setSearch(search: string) {
    this.search = search;
    return this;
  }

  setPage(page: number) {
    this.page = page;
    return this;
  }
}
