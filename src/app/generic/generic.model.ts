export interface TableHeader{
  headerName:string;
  fieldName:string;
  fieldWidth:string;
  searchByField:string;
  isSearchAble:boolean;
  searchType:SearchType
}
export interface SearchType{
text:boolean;
dropdown:boolean;
date:boolean;
lstDropdown?:any[];
}
export interface TableHeaderMain{
  tableWidth:string;
  actionWidth:string;
  showActionField:boolean;
  showActionFieldOnLeft:boolean;
  header:TableHeader[];
}
