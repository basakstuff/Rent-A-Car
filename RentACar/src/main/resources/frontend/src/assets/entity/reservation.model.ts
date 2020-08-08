import { Car } from './car.model';
import { Agency } from './agency.model';

export class Reservation{

    constructor(
        public id?: number,
        public day?: number,
        public bookingDate?: Date,
        public returnDate?: Date,
        public car?: Car,
        public username?: string,
        public bookingAgencyId?: number,
        public returnAgencyId?: number
      ) {}
}
