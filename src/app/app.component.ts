import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DemoserviceService } from './services/demoservice.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
// import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('examp', { static: true }) modalElement: ElementRef
  title = 'app';
  item: any;
  restaurantStates: any
  stateID: any = {};
  stateIDD: any = {};
  checkoutForm: FormGroup;
  cityname: [];
  restaurantId: any;
  restaurant_id: any;
  address_id: any;


  constructor(private demoService: DemoserviceService, private toastr: ToastrService, private fb: FormBuilder) {
    console.log(demoService);

    // for (let i = 0; i < 5; i++) {
    //   console.log(i + i);
    //   // return

    // }

    // const arr = [10, 20, 30, 40, 50]
    // for (let item in arr) {
    //   console.log(item);
    //   console.log(typeof (item));
    //   console.log(typeof (arr));


    // }
    // let str = ['hello', 'drt']
    // for (let a in str) {
    //   console.log(a);

    // }
    // const obj =

    //   { name: 'ashu', age: 25, job: 'developer' }
    // { name: 'ashish lowanshi', age: 256, job: 'developer' },
    // { name: 'ashish angular dev', age: 256, job: 'developer' },


    // console.log(obj);
    // for (let i in obj) {
    //   console.log(':', obj[i]);


    // }


    // for(let i= 0; i<5; i++){
    //       if(i === 3){
    //         break;

    //       }
    //       console.log(i);
    // }

    // for (let index of obj) {
    //   console.log(index);
    //   // console.log(obj.keys());
    // }
    // for(let i = 0; i <10; i++){
    //     if(i===5){
    //         continue
    //     }
    //     console.log(i);

    // }
    // const arrs = [{ number: 12 }, 12, 12112, 21, 212, 2, 12, 12121, 22121, 21212, 212,]
    // arrs.forEach((data) => {
    //   console.log(data);
    //   arrs

    // })
    // const arrsd = [10, 20, 30, 40];
    // arrsd.forEach(function (value, index) {
    //   console.log(index + ": " + value);
    // });


    // const arrass = [23, 3, 232, 32323, 232323232, 32323, 232, 323, 2]
    // let vari = arrass.map((val, val2) => {
    //   // console.log(typeof (val));
    //   // console.log(arrass);
    //   console.log(val * 2);

    //   return
    //   console.log(val2, ':', val);
    // })
    // // console.log(vari);
    // let arr = ['asas', 'sdff'];
    // arr.push('l');  // Adds 4 to the array
    // console.log(arr);  // [1, 2, 3, 4]



    // let arrd = ['apple', 'banana', 'cherry'];
    // let str = arrd.join('|');
    // console.log(str);  // "apple, banana, cherry"


    // let arrb = [1, 2, 3, 2, 1];
    // let index = arrb.indexOf(0);  // Finds the first occurrence of 2
    // console.log(index);  // 1

    // //reduce method

    // let arrgg = [1, 2, 3, 4];
    // let sum = arrgg.reduce(function (accumulator, currentValue) {
    //   return accumulator + currentValue;
    // }, 0);
    // console.log(sum);  // 10

    // let arrayreducemethod = [3, 3, 3, 3, 3, 3, 3, 3]
    // let add = arrayreducemethod.reduce((accum, curr) => {
    //   return accum + curr
    // }, 0)
    // console.log(add);
    // let arra = [0, 0, 9, 0];
    // let found = arra.find(function (item) {
    //   return item > 2;
    // });
    // console.log(found);  // 3


    // let arrin = [1, 2, 3];
    // let hasTwo = arrin.includes(9);
    // console.log(hasTwo);  // true

    //questions

    // const numbers = [1, 2, 3, 4, 5]; //find sum
    // let sum = numbers.reduce((accum, curr) => {
    //   return accum + curr
    // }, 0)
    // console.log(sum);
    // const numberss = [10, 50, 30, 20, 60];
    // let sorts = numberss.sort()
    // console.log(sorts);

    // console.log(sorts);

    // sorts.filter((num) => {
    //   // var num = 0
    //   if (num ) {
    //     console.log(num);
    //   }
    // })
    // const numbersdup = [1, 2, 3, 2, 1, 4, 5, 5];
    // const findarr = (element)=>{
    //   return Math.max(...element)
    // }
    // console.log(findarr(numbersdup));
    const ardr = ['zzzz', 'a', 'sdsddsd', 'sdsdds',]
    const arr = ['hello', 'asas']
    // const sortt =  arr.sort()
    const sortt = arr[1].slice(0, 5)
    console.log(sortt);

    // object
    const person = { name: 'John', age: 30, job: 'Developer' };
    const keyss = Object.keys(person)
    console.log(keyss);
    // const keysss = Object.values(persons)
    // console.log(keysss);


    const persons = { names: 'John', age: 30, job: 'Developer' };
    const target = { name: 'John' };
    const source = { age: 30, job: 'Developer' };
    const result = Object.assign(target, source, persons, person);
    console.log(result); // Output: { name: 'John', age: 30, job: 'Developer' }

    const personname = { isHuman: false, printIntroduction: function () { console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`); } };
    const me = Object.create(personname);

    me.name = 'John';  // 'name' is a property set on 'me', but not on 'person'
    me.isHuman = 'true';  // inherited properties can be overridden
    me.printIntroduction();  // Output: My name is John. Am I human? true

    const obj = { name: 'John' };
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    console.log(descriptors);
    // Output: 
    // { 
    //   name: {
    //     value: 'John',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    //   }
    // }

  }


  apidata: any
  // restaurantId : any = this.item

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      mapped_user_id: [1], // Example fixed value, can be dynamic
      restaurant_name: ['', Validators.required], // Restaurant name form control
      city_id: ['', Validators.required], // City ID form control
      state_id: ['', Validators.required], // State ID form control
      address_line1: ['', Validators.required], // Address form control
      address_id: [''] // Address form control
    });


    this.getRestaurants(); // Fetch states

    this.getuser2()
    // this.baseUrl2Data()
  }
  getuser2() {
    this.demoService.getData('get-restaurants').subscribe((data) => {
      console.log(data);
      this.apidata = data.data

    }, (error) => {
      this.toastr.error(error.message)
      console.error('Error fetching data:', error);
    })
  }
  getRestaurants() {
    this.demoService.getData('get-states').subscribe(
      (response: any) => {
        this.restaurantStates = response.data;
      },
      (error) => {
        this.toastr.error('Error fetching states');
        console.error('Error fetching states:', error);
      }
    );
  }
  onchange(event: any) {
    const selectedStateId = event.target.value; // Get the selected state_id from the event
    this.stateIDD = selectedStateId; // Store the selected state_id
    this.checkoutForm.patchValue({ state_id: selectedStateId }); // Update form control for state_id

    this.getCities(selectedStateId); // Fetch cities based on the selected state_id
  }
  getCities(stateId: number) {
    this.demoService.getData('get-cities/' + stateId).subscribe(
      (data: any) => {
        this.cityname = data.data; // Populate cities array
      },
      (error) => {
        this.toastr.error('Error fetching cities');
        console.error('Error fetching cities:', error);
      }
    );
  }

  // Function to populate the form with selected restaurant details
  editRestaurant(item: any) {
    // Patch the form values with the selected restaurant data
    this.restaurant_id = item.restaurant_id;
    this.address_id = item.address_id
    console.log(this.restaurant_id);
    console.log(this.address_id);

    this.checkoutForm.patchValue({
      restaurant_name: item.restaurant_name,
      address_line1: item.address_line1,
      state_id: item.state_id, // Map state name to state_id
      city_id: item.city_id,     // Map city name to city_id
      address_id: item.address_id,     // Map city name to city_id
    });
    this.getCities(item.state_id)

  }
  // // Helper function to get state_id by state name
  // getStateIdByName(stateName: string): number {
  //   const state = this.restaurantStates.find(s => s.description === stateName);
  //   console.log(this.restaurantStates);

  //   return state ? state.state_id : null;
  // }

  // // Helper function to get city_id by city name
  // getCityIdByName(cityName: string): number {
  //   const city = this.cityname.find(c => c['city_name'] === cityName);

  //   return city ? city['city_id'] : null;
  // }
  onSubmit() {

    // Build the payload for the POST request
    const payload = {
      // mapped_user_id: this.checkoutForm.value.mapped_user_id,
      ...this.checkoutForm.value
      // restaurant_name: this.checkoutForm.value.restaurant_name,
      // city_id: this.checkoutForm.value.city_id,
      // state_id: this.checkoutForm.value.state_id,
      // address_line1: this.checkoutForm.value.address_line1
    };

    console.log('Payload for POST request:', payload);


    // // POST the payload using your service
    // this.demoService.postData('add-restaurant', payload).subscribe(
    //   (response: any) => {
    //     console.log('Post successful:', response);
    //     console.log(this.checkoutForm.valid);
    //     // const modal = new Modal(this.modalElement.nativeElement)
    //     // modal.hide()
    //     console.log(this.modalElement);
    //     this.modalElement.nativeElement.click()
    //     this.toastr.success('Data submitted successfully!');
    //     this.resetForm()
    //   },
    //   (error) => {
    //     this.toastr.error('Error submitting data');
    //     console.error('Error submitting data:', error);
    //   }
    // );

    if (this.restaurant_id) {
      console.log(this.restaurant_id);
      console.log(this.address_id);

      this.demoService.putData(`update-restaurant/${this.restaurant_id}`, payload).subscribe((element) => {
        console.log(element);
        this.modalElement.nativeElement.click()
        this.toastr.success('Restaurant updated successfully!')
        this.resetForm()
        // this.getRestaurants()
        this.getuser2()
      }, (error) => {
        this.toastr.error('Error updating restaurant:',)
      })
    }

  }
  resetForm() {
    this.checkoutForm.reset(); // Reset all form controls
    this.cityname = []; // Clear city dropdown
  }



  // 

  // baseUrl2Data() {
  //   this.demoService.getDataForBaseUrl2('products').subscribe((data) => {
  //     console.log(data);

  //   })
  // }
}
