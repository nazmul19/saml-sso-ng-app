import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-saml-failure',
  templateUrl: './saml-failure.component.html',
  styleUrls: ['./saml-failure.component.css']
})
export class SamlFailureComponent implements OnInit {
  error: string;
  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) { 
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
    console.log(this.route.queryParams)
    this.route.queryParams.subscribe(params => {
        this.error = params['e'];
    });
  }

  

}
