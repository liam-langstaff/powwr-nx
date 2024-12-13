import { Deal } from '../../components/tender/deals/interfaces/deal.interface';
import { Status } from '@powwr-nx/ui';
import { TenderStep } from '../../components/tender/tender-steps/interfaces/tender-step.interface';

export const DEAL_DATA: Deal[] = [
  {
    created: new Date('2024-09-09'),
    dueDate: new Date('2024-09-16'),
    status: 'Prices requested',
    customer: 'Albion Innovations',
    meters: 23,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-09'),
    dueDate: new Date('2024-09-16'),
    status: 'Prices requested',
    customer: 'Thames Solutions',
    meters: 253,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-09'),
    dueDate: new Date('2024-09-16'),
    status: 'Prices requested',
    customer: 'Britannia Enterprises',
    meters: 177,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Sterling Ventures',
    meters: 98,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Highland Tech',
    meters: 204,
    quotes: 1,
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Price refresh requested',
    customer: 'Windsor Industries',
    meters: 43,
    quotes: 2,
    updates: '-'
  },
  {
    created: new Date('2024-09-05'),
    dueDate: new Date('2024-09-12'),
    status: 'Prices received',
    customer: 'Coventry Creative',
    meters: 41,
    quotes: 4,
    updates: '-'
  },
  {
    created: new Date('2024-09-05'),
    dueDate: new Date('2024-09-12'),
    status: 'Price refresh requested',
    customer: 'Regent Financial',
    meters: 211,
    quotes: 6,
    updates: '-'
  },
  {
    created: new Date('2024-09-04'),
    dueDate: new Date('2024-09-10'),
    status: 'Contract Requested',
    customer: 'Mundi Tech',
    meters: 22,
    quotes: 5,
    updates: '-'
  },
  {
    created: new Date('2024-09-03'),
    dueDate: new Date('2024-09-09'),
    status: 'Prices requested',
    customer: 'Kensington Consulting',
    meters: 59,
    quotes: 8,
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Sterling Ventures',
    meters: 98,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Highland Tech',
    meters: 204,
    quotes: 1,
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Price refresh requested',
    customer: 'Windsor Industries',
    meters: 43,
    quotes: 2,
    updates: '-'
  },
  {
    created: new Date('2024-09-09'),
    dueDate: new Date('2024-09-16'),
    status: 'Prices requested',
    customer: 'Albion Innovations',
    meters: 23,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-09'),
    dueDate: new Date('2024-09-16'),
    status: 'Prices requested',
    customer: 'Thames Solutions',
    meters: 253,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-09'),
    dueDate: new Date('2024-09-16'),
    status: 'Prices requested',
    customer: 'Britannia Enterprises',
    meters: 177,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Sterling Ventures',
    meters: 98,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Price refresh requested',
    customer: 'Windsor Industries',
    meters: 43,
    quotes: 2,
    updates: '-'
  },
  {
    created: new Date('2024-09-05'),
    dueDate: new Date('2024-09-12'),
    status: 'Prices received',
    customer: 'Coventry Creative',
    meters: 41,
    quotes: 4,
    updates: '-'
  },
  {
    created: new Date('2024-09-05'),
    dueDate: new Date('2024-09-12'),
    status: 'Price refresh requested',
    customer: 'Regent Financial',
    meters: 211,
    quotes: 6,
    updates: '-'
  },
  {
    created: new Date('2024-09-04'),
    dueDate: new Date('2024-09-10'),
    status: 'Contract Requested',
    customer: 'Mundi Tech',
    meters: 22,
    quotes: 5,
    updates: '-'
  },
  {
    created: new Date('2024-09-03'),
    dueDate: new Date('2024-09-09'),
    status: 'Prices requested',
    customer: 'Kensington Consulting',
    meters: 59,
    quotes: 8,
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Sterling Ventures',
    meters: 98,
    quotes: '-',
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Prices received',
    customer: 'Highland Tech',
    meters: 204,
    quotes: 1,
    updates: '-'
  },
  {
    created: new Date('2024-09-06'),
    dueDate: new Date('2024-09-13'),
    status: 'Price refresh requested',
    customer: 'Windsor Industries',
    meters: 43,
    quotes: 2,
    updates: '-'
  }
];

export const TENDER_CARDS: TenderStep[] = [
  {
    title: 'Customer information',
    description: 'This step involves setting up the initial configurations and settings.',
    status: Status.pending
  },
  {
    title: 'Meter lookup & usage data',
    description: 'During planning, all necessary resources and timelines are outlined.',
    status: Status.completed
  },
  {
    title: 'Suppliers & products',
    description: 'Execute the tasks as per the plan with adherence to the timelines.',
    status: Status.pending
  },
  {
    title: 'Documents',
    description: 'Continuously monitor the progress and address any deviations.',
    status: Status.overdue
  },
  {
    title: 'Review & submit',
    description: 'Finalize and close all project activities and handover deliverables.'
  }
];
