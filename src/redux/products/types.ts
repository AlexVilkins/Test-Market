export type Product = {
  id: number;
  img: string;
  newPrice: number;
  oldPrice: number;
  rating: number;
  text: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ProductState {
  items: Product[];
  status: Status;
}
