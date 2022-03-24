<template>
  <div>
    <div>
      <canvas id="TopTenChart" style="width: 350px; height: 300px"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
// import { useStore } from "vuex";
import Chart from "chart.js";
import { getVisitData, addColor } from "../../utils/visit.js";
// import visitor from "../database/visitor.json";

const props = defineProps({
  data: Array,
});

const visitorName = getVisitData(props.data).Name;
const visitorCount = getVisitData(props.data).Count;

onMounted(() => {
  let ctx = document.getElementById("TopTenChart");
  console.log(TopTenChart);
  let TopTenChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: visitorName,
      datasets: [
        {
          data: visitorCount,
          borderWidth: 1,
          backgroundColor: addColor(props.data),
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
</script>

<style></style>
