export interface IHealthExaminationInformation {
  name: string;
  age: number | null;
  hospital: IHospital | null;
}

export interface IHospital {
  id: number;
  name: string;
}