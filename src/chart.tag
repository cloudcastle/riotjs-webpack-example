import Chart from 'chart.js';

<chart>
  <canvas width={width} height={height}></canvas>
  <style>
    chart {
      display: block;
      width: 500px;
      height: 300px;
    }
  </style>
  <script>
    var _this = this;
    this.width = 400;
    this.height = 300;

   var drawChart = function drawChart() {
     if (!opts.chart) opts.chart = {};

     var ctx = _this.root.querySelector('canvas');
     var chart = new Chart(ctx, opts.chart);
     _this.trigger('loaded', chart);
   };


     this.on('mount', function () {
       drawChart();
     });

     this.on('loaded', function (c) {
       _this.on('unmount', function () {
         c.destroy();
       });
     });

  </script>
</chart>