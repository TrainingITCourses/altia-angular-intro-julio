import { RangeType } from './range.type';
import { StatusType } from './status.type';

export type AgencyType = {
  id: string;
  name: string;
  range?: RangeType;
  status: StatusType;
};
