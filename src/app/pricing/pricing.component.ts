import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  @Input('title') title ;
  @Input('price') price;
  @Input('value') value;
  
  values = [{name:"free",
    valid :[
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access"
    ],
    false :[
      "Non Community Access",
      "Unlimited Private Projects",
      "Free Subdomain"
    ]},
    {name:"plus",
    valid :[
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Non Community Access",
      "Unlimited Private Projects"
    ],
    false :[
      
      "Free Subdomain"
    ]},
    {name:"pro",
    valid :[
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Non Community Access",
      "Unlimited Private Projects",
      "Free Subdomain"
    ],
    false :[
      
    ]}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
