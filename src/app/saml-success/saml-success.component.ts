import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-saml-success',
  templateUrl: './saml-success.component.html',
  styleUrls: ['./saml-success.component.css']
})
export class SamlSuccessComponent implements OnInit {
  private token: string;
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
        this.token = params['t'];
    });
    if(this.token){
      this.authenticationService.samlLogin(this.token);
      this.router.navigate(['/']);
    }
  }

}
