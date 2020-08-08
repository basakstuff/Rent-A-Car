import { RentProperty } from './rentProperty.model';

export class Car{

    constructor(
        public id?: number,
        public brand?: string,
        public model?: string,
        public modelYear?: number,
        public color?: string,
        public fuelType?: string,
        public rentProperty?: RentProperty
      ) {}
}