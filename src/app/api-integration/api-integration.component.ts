import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../services/demoservice.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})
export class ApiIntegrationComponent implements OnInit {

  constructor(private demoService: DemoserviceService) {
    const arr = { 'asa': 23, 'sds': 30 }
    // console.log();
    const result = Object.entries(arr)
    console.log(result);

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const results = fruits[0]
    console.log(results);


  }

  ngOnInit() {
    this.baseUrl2Data()

  }
  apiData: any[]
  loading: boolean = false
  baseUrl2Data() {
    this.loading = true
    this.demoService.getDataForBaseUrl2('products').subscribe((element) => {
      console.log(element);
      this.apiData = element
      this.loading = false
    })
  }
}
