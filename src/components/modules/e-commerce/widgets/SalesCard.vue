<template>
  <b-card no-body :class="classname">
    <apexchart className="admin-chart-02" type="area" :options="adminchart02.options" :series="adminchart02.series" />
    <b-card-body>
      <p class="text-white">{{ sales }}</p>
      <h4 class="text-white counter mb-0">{{ amount }}</h4>
    </b-card-body>
  </b-card>
  <!-- <b-card no-body class="bg-primary">
    <apexchart className="admin-chart-02" type="area" height="100%" :options="adminchart02.options" :series="adminchart02.series" />
    <b-card-body>
      <p class="text-white">{{ sales }}</p>
      <h4 class="text-white counter mb-0">{{ amount }}</h4>
    </b-card-body>
  </b-card> -->
</template>
<script>
export default {
  props: {
    classname: { type: String, default: '' },
    sales: { type: String, required: true },
    amount: { type: String, required: true }
  },
  setup() {
    return {
      adminchart02: {
        series: [
          {
            name: 'total',
            data: [30, 50, 20, 60, 25, 80, 40]
          }
        ],
        options: {
          chart: {
            fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            height: 155,
            type: 'area',
            toolbar: {
              show: false
            },
            sparkline: {
              enabled: true
            }
            //   toolbar: {
            //     show: false
            //   }
          },
          colors: ['#ffffff'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 4
          },
          yaxis: {
            show: false
          },
          legend: {
            show: false
          },
          xaxis: {
            labels: {
              minHeight: 22,
              maxHeight: 22,
              show: true,
              style: {
                colors: '#ffffff'
              }
            },
            lines: {
              show: false
            },
            categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
          },
          responsive: [
            {
              breakpoint: 1399,
              options: {
                chart: {
                  height: 140
                }
              }
            }
          ],
          grid: {
            show: false
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'vertical',
              shadeIntensity: 0,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 0.4,
              opacityTo: 0.1,
              stops: [0, 50, 80],
              colors: ['#3a57e8']
            }
          },
          tooltip: {
            enabled: false
          }
        }
      }
    }
  }
}
</script>
