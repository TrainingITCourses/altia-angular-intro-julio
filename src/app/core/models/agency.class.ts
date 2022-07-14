import { RangeEnum } from './range.enum';
import { StatusType } from './status.type';

export class AgencyClass {
  public id!: string;
  public name!: string;
  public range!: RangeEnum;
  public status!: StatusType;
  constructor() {}
}
