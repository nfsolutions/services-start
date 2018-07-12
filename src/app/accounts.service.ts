import {LoggingService} from './logging.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private readonly loggingService: LoggingService) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateAccount(name: string, status: string) {
    this.accounts[name].status = status;
    this.loggingService.logStatusChange(status);
  }
}
