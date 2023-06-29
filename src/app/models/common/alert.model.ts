export class AlertModel{
  type:AlertType;
  message:string;
  time?:number;
}
export enum AlertType{
  SUCCESS="success",
  INFO="info",
  WARNING="warning",
  PRIMARY="primary",
  DANGER="danger",
  SECONDARY="secondary",
  LIGHT="light",
  DARK="dark",
}
