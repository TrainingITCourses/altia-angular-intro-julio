import { RangeEnum } from './range.enum';
import { StatusType } from './status.type';

export type AgencyType = {
  id: string;
  name: string;
  range?: RangeEnum;
  status: StatusType;
};
