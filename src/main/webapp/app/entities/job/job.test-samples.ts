import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 30946,
};

export const sampleWithPartialData: IJob = {
  id: 10133,
  jobTitle: 'Chief Integration Strategist',
  minSalary: 30264,
  maxSalary: 23250,
};

export const sampleWithFullData: IJob = {
  id: 7705,
  jobTitle: 'District Usability Consultant',
  minSalary: 2834,
  maxSalary: 30184,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
