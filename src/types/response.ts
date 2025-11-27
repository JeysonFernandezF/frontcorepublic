export interface ResponsePagination<T> {
  data: T[],
  meta: Meta
}

export interface Meta {
  current_page:number,
  last_page:number,
  per_page:number,
}

export interface Response<T>{
  data:T
}
