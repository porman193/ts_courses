export interface BaseModel {
  readonly id: number |string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}