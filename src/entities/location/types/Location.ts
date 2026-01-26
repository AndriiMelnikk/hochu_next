export interface ICity {
  ref: string;
  name: string;
  mainDescription: string;
  settlementType: string;
  area: string;
  region: string;
  deliveryCityRef: string;
}

export interface ISearchCitiesResponse {
  data: ICity[];
}

export interface ISearchCitiesDto {
  query: string;
  limit?: number;
}
