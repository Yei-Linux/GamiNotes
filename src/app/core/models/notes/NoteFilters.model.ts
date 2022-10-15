export class NoteFilters {
  page: number;
  size: number;
  search: string;
  is_liked?: boolean;
  is_ignored?: boolean;

  constructor(
    page: number,
    size: number,
    search: string,
    is_liked: boolean,
    is_ignored: boolean
  ) {
    this.page = page;
    this.size = size;
    this.search = search;
    this.is_liked = is_liked;
    this.is_ignored = is_ignored;
  }

  setSearch(search: string) {
    this.search = search;
    return this;
  }

  setPage(page: number) {
    this.page = page;
    return this;
  }

  setIsLiked(is_liked: boolean) {
    this.is_liked = is_liked;
    return this;
  }

  setIsIgnored(is_ignored: boolean) {
    this.is_ignored = is_ignored;
    return this;
  }
}
