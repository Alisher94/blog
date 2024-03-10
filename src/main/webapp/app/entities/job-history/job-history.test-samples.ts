import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 8024,
};

export const sampleWithPartialData: IJobHistory = {
  id: 22280,
  endDate: dayjs('2024-02-21T00:38'),
};

export const sampleWithFullData: IJobHistory = {
  id: 6675,
  startDate: dayjs('2024-02-20T15:45'),
  endDate: dayjs('2024-02-20T13:24'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
