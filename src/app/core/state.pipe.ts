import {Pipe} from '@angular/core';
import {Model} from '../model/repository.model';
import {MODES, SharedState} from './sharedState.model';

@Pipe({
  name: 'formatState',
  pure: true
})
export class StatePipe {
  constructor(private model: Model) {}
  transfrom(value: any): string {
    if (value in SharedState) {
      const state = value as SharedState;
      return MODES[state.mode] + (state.id !== undefined ? `${this.model.getStudent(state.id).name}` : '');
    } else {
      return 'No Data';
    }
  }
}
