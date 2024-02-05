<template>
    <VCard id="app" class="pa-4">
        <VBtn @click="shuffleData" color="text-button bg-primary">Shuffle</VBtn>
        <RadarChart v-bind="radarChartProps" />
    </VCard>
</template>
  
<script>
import { Chart, registerables } from 'chart.js';
import { RadarChart, useRadarChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
    name: 'App',
    components: {
        RadarChart,
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

        const { radarChartProps, radarChartRef } = useRadarChart({
            chartData,
        });

        function shuffleData() {
            data.value = shuffle(data.value);
        }

        return { shuffleData, radarChartProps, radarChartRef };
    },
});
</script>
  
<style scope>
</style>