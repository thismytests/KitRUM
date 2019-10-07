export  interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

interface ImageInfo {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Item {
  id: number;
  type: string;
  url: string;
  title: string;
  username: string;
  images: {
    fixed_height_still: ImageInfo
  };
}

export interface Api {
  data: Array<Item>;
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
  pagination: Pagination;
}
