import raw from './raw.tag';
import chart from './chart.tag';
import text from './data/text.md';
import profits from './data/profits.csv';

<app>
  <h1>Hello world</h1>
  <div class="app_text"><raw content={text}/></div>
  <chart chart={chart}></chart>

  <style>
    app {
      display: block;
      margin: 0 auto;
      max-width: 800px;
      padding: 1em;
      text-align: center;
    }
    .app_text {
      display: block;
      text-align: left;
    }
  </style>

  <script>
    this.text = text;

    this.chart = {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: "Profit",
          data: []
        }]
      }
    };

    profits.forEach((val, key) => {
      this.chart.data.labels.push(val['Year']);
      this.chart.data.datasets[0].data.push(val['Profit']);
    });

  </script>
</app>
