
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.services';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        private toastr: ToastrService) { }

    canActivate() {
        if (!this.authService.isTokenExpired()) {
            return true;
        }

        this.router.navigate(['/signup']);
        this.toastr.info('You must sign up/login to view this page');

        return false;
    }

}