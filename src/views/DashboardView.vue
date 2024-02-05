<template>
  <VContainer>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="4">
        <BarChart />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <DoughnutChart />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <LineChart />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <PieChart />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <PolarAreaChart />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <ScatterChartVue />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <RadarChart />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <BubbleChart />
      </v-col>
    </v-row>
  </VContainer>
</template>

<script setup>
import BarChart from "@/components/charts/BarChart.vue";
import DoughnutChart from "@/components/charts/DoughnutChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import PieChart from "@/components/charts/PieChart.vue";
import PolarAreaChart from "@/components/charts/PolarAreaChart.vue";
import ScatterChartVue from "@/components/charts/ScatterChart.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import BubbleChart from "@/components/charts/BubbleChart.vue";
</script>

<style scoped></style>
