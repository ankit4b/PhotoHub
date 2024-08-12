import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  activeCatagory = 'Views';
  // view: [number, number] = [700, 400]; // Dimensions of the chart
  // Options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Views';

  data: any = null;

  // Data to be plotted
  graphData = {
    allTimeData: [
      {
        name: 'Views',
        series: [
          { name: '2021', value: 1000 },
          { name: '2022', value: 30000 },
          { name: '2023', value: 15000 },
          { name: '2024', value: 5000 },
        ],
      },
    ],
    monthData: [
      {
        name: 'Views',
        series: [
          { name: 'Jan', value: 100 },
          { name: 'Feb', value: 350 },
          { name: 'Mar', value: 1500 },
          { name: 'Apr', value: 500 },
          { name: 'May', value: 100 },
          { name: 'Jun', value: 300 },
          { name: 'Jul', value: 150 },
          { name: 'Aug', value: 250 },
        ],
      },
    ],
  };

  ngOnInit(): void {
    this.data = this.graphData['monthData'];
  }

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.setGraphData(selectedValue);
  }

  setGraphData(name: string) {
    if (name === 'allTimeData' || name === 'monthData') {
      this.data = this.graphData[name];
    }
    console.dir(this.data);
  }

  setCatagory(name: string) {
    this.activeCatagory = name;
  }
}
