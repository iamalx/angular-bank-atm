import { TestBed, inject } from '@angular/core/testing';



describe('BankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankService]
    });
  });

  it('should be created', inject([BankService], (service: BankService) => {
    expect(service).toBeTruthy();
  }));
});
