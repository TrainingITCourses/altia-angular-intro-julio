import { RangeEnum } from './range.enum';
import { StatusType } from './status.type';

export interface AgencyInterface {
  id: string;
  name: string;
  range?: RangeEnum;
  status: StatusType;
}
