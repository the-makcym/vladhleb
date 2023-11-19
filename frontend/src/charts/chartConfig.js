export const data = {
  labels: [13, 14, 15, 16, 17, 18, 19],
  datasets: [
    {
      borderColor: '#14607E',
      backgroundColor: '#14607E',
      data: [100000, 90000, 125000, 100000, 150000, 190000, 170000],
      tension: 0.3,
    },
    {
      borderColor: '#14607E',
      borderDash: [5, 15],
      backgroundColor: '#14607E',
      data: [110000, 80000, 110000, 120000, 160000, 140000, 130000],
      tension: 0.3,
    }
  ]
}

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: true
}