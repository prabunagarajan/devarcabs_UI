import { TestBed } from '@angular/core/testing';

import { WorkflowconfigService } from './workflowconfig.service';

describe('WorkflowconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkflowconfigService = TestBed.get(WorkflowconfigService);
    expect(service).toBeTruthy();
  });
});
