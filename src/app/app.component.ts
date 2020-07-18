import { Component } from '@angular/core';
import {CoronaService} from './corona.service';
import {GoogleChartInterface} from 'ng2-google-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidtracker';
  countries: any;
  country: any;
  Confirmed: number;
  Recovered: number;
  Deaths: number;
  Date: Date;
  Active: number;
  Country: string;
  TotalConfirmed: number;
  TotalRecovered: number;
  TotalDeaths: number;
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  };



  constructor(private corona: CoronaService){}
  ngOnInit(){
    this.corona.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;


    }
    );
    this.getWorldtotal();
    this.updateChart();

  }
  // tslint:disable-next-line:typedef

  getCoronaData(){
    this.corona.getCoronaRealData(this.country).subscribe((data) => {
      console.log(data);
      const index = data.length - 1;
      this.Confirmed = data[index].Confirmed;
      this.Recovered = data[index].Recovered;
      this.Deaths = data[index].Deaths;
      this.Date = data[index].Date;
      this.Active = data[index].Active;
      this.Country = data[index].Country;
    });
  }
  getCountry(country: any){
    this.country = country;
  }
  getWorldtotal(){
    this.corona.getTotal().subscribe((data) => {
      console.log(data);
      this.TotalConfirmed = data.TotalConfirmed;
      this.TotalDeaths = data.TotalDeaths;
      this.TotalRecovered = data.TotalRecovered;
    });
    }
    updateChart(){
    const dataTable = [];
    


    }
  }






