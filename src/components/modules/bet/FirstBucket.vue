<template>
    <div>
        <b-col>
            <apexchart :key="chartKey" :series="firstAttemptChart.series" type="bar" height="300"
                :options="firstAttemptChart.options" />
        </b-col>
    </div>
</template>
<script setup>
import { defineProps, reactive, ref } from 'vue'
const props = defineProps({
    firstAttempts: Object
})
const firstAttempts = ref([])

const firstAttemptChart = reactive({
    series: [],
    options: {
        chart: {
            type: 'bar',
            height: 550,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 15,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '16px',
                            fontWeight: 800
                        }
                    }
                }
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '16px',
            }
        },
        legend: {
            position: 'top',
            offsetY: 25,
            style: {
                colors: ['#126e51', '#98002e']
            }
        },
        xaxis: {
            type: 'category',
            categories: [],
            labels: {
                enabled: true,
                style: {
                    fontSize: '16px',
                    fontWeight: 800
                }
            }
        },
        colors: ['#126e51', '#98002e']
    }
})

const loadData = () => {
    firstAttempts.value = props.firstAttempts
    let fgMissed = []
    let fgMade = []
    let categories = []

    props.firstAttempts.forEach(element => {
        fgMissed.push((element.fgAttempted - element.fgMade))
        fgMade.push(element.fgMade)
        categories.push(element.name)
    })
    firstAttemptChart.series = [
        {
            name: 'Made',
            data: fgMade
        },
        {
            name: 'Missed',
            data: fgMissed
        },
    ]
    // firstAttemptChart.options.colors = ['#'+actualTeam.value.color, '#c03221']
    firstAttemptChart.options.colors = ['#126e51', '#c03221']
    firstAttemptChart.options.xaxis.categories = categories
    // chartKey.value += 1;
}

loadData()
</script>