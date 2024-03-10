import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 549,
};

export const sampleWithPartialData: IEmployee = {
  id: 2978,
  salary: 8772,
};

export const sampleWithFullData: IEmployee = {
  id: 16985,
  firstName: 'Reymundo',
  lastName: 'Kemmer',
  email: 'Lilian.Ortiz@hotmail.com',
  phoneNumber: 'sardonic',
  hireDate: dayjs('2024-02-20T20:04'),
  salary: 11103,
  commissionPct: 5207,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
