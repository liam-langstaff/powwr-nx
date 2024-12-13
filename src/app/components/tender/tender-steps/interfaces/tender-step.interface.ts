import { Status } from '@powwr-nx/ui';

export interface TenderStep {
  title: string;
  description: string;
  status?: Status;
}