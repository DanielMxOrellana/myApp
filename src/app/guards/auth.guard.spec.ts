import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }],
    });
  });

  it('debe permitir acceso si hay token', () => {
    localStorage.setItem('token', '123');
    expect(authGuard()).toBeTrue();
  });

  it('debe redirigir si no hay token', () => {
    localStorage.removeItem('token');
    expect(authGuard()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth']);
  });
});
