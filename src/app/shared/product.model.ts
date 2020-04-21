export enum Unit {
  'g' = 0,
  'ml' = 1
}

export interface Product {
  name: string;
  brand: string;
  packageCapacity: number;
  unit: Unit;
  caloricValue: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  barcode: number;
}
