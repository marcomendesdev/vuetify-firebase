<template>
    <VCard id="app" class="pa-4">
        <VBtn @click="shuffleData" color="text-button bg-primary">Shuffle</VBtn>
        <LineChart v-bind="lineChartProps" />
    </VCard>
</template>
  
<script>
import { Chart, registerables } from 'chart.js';
import { LineChart, useLineChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
    name: 'App',
    components: {
        LineChart,
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

        const { lineChartProps, lineChartRef } = useLineChart({
            chartData,
        });

        function shuffleData() {
            data.value = shuffle(data.value);
        }

        return { shuffleData, lineChartProps, lineChartRef };
    },
});
</script>
  
<style scope>
</style>