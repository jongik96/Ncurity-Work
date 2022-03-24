<template>
  <div>
    <p>총 {{ AllVisitCount }}건</p>
    <canvas id="visitChart" style="width: 1200px; height: 300px"> </canvas>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Chart from "chart.js";
import { getDate } from "../../utils/date.js";
import { getVisitData, getVisitCount } from "../../utils/visit.js";

const store = useStore();
store.dispatch("FETCH_TIME");
const visitData = store.state.time;

const visitorCount = getVisitCount(visitData);
const visitDate = getDate(visitData);

const AllVisitCount = computed(() => {
  const AllVisit = getVisitData(visitData).allCount;
  return AllVisit.toLocaleString();
});

onMounted(() => {
  let ctx = document.getElementById("visitChart");
  console.log(visitChart);
  let visitChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: visitDate,
      datasets: [
        {
          data: visitorCount,
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

<style scoped>
p {
  float: right;
}
</style>
