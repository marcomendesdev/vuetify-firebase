<template>
    <VCard id="app" class="pa-4">
        <VBtn @click="shuffleData" color="text-button bg-primary">Shuffle</VBtn>
        <DoughnutChart v-bind="doughnutChartProps" />
    </VCard>
</template>
  
<script>
import { Chart, registerables } from 'chart.js';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
    name: 'App',
    components: {
        DoughnutChart,
    },
    setup() {
        const data = ref([30, 40, 60, 70, 5]);

        const chartData = computed(() => ({
            labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
            datasets: [
                {
                    data: data.value,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
            ],
        }));

        const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
            chartData,
        });

        function shuffleData() {
            data.value = shuffle(data.value);
        }

        return { shuffleData, doughnutChartProps, doughnutChartRef };
    },
});
</script>
  
<style scope>
</style>