// script.js

const dashboardData = {

  april: {
    plantSubmit: 20,
    plantBelum: 67,
    officeSubmit: 15,
    officeBelum: 55,

    plantBar: [20,17,13,9],
    officeBar: [15,12,9,6]
  },

  mei: {
    plantSubmit: 30,
    plantBelum: 50,
    officeSubmit: 22,
    officeBelum: 40,

    plantBar: [30,24,18,14],
    officeBar: [22,18,14,10]
  }

};

const monthSelect = document.getElementById("monthSelect");

const plantSubmit = document.getElementById("plantSubmit");
const plantBelum = document.getElementById("plantBelum");

const officeSubmit = document.getElementById("officeSubmit");
const officeBelum = document.getElementById("officeBelum");


// PIE CHART PLANT
const plantChart = new Chart(document.getElementById("plantChart"), {

  type: "doughnut",

  data: {
    labels: ["Submit","Belum Submit"],

    datasets: [{
      data: [20,67],

      backgroundColor: [
        "#7d132b",
        "#ffd54f"
      ],

      borderColor: "#ffffff",
      borderWidth: 4,
      hoverOffset: 8
    }]
  },

  options: {
    responsive:true,

    plugins:{
      legend:{
        position:"bottom",
        labels:{
          padding:20,
          font:{
            size:12
          }
        }
      }
    },

    cutout:"70%"
  }

});


// PIE CHART OFFICE
const officeChart = new Chart(document.getElementById("officeChart"), {

  type: "doughnut",

  data: {
    labels: ["Submit","Belum Submit"],

    datasets: [{
      data: [15,55],

      backgroundColor: [
        "#7d132b",
        "#ffd54f"
      ],

      borderColor:"#ffffff",
      borderWidth:4,
      hoverOffset:8
    }]
  },

  options: {
    responsive:true,

    plugins:{
      legend:{
        position:"bottom",
        labels:{
          padding:20,
          font:{
            size:12
          }
        }
      }
    },

    cutout:"70%"
  }

});


// BAR CHART PLANT
const plantBar = new Chart(document.getElementById("plantBar"), {

  type:"bar",

  data:{
    labels:["APRIL","MEI","JUNI","JULI"],

    datasets:[{
      label:"Plant",
      data:[20,17,13,9],

      backgroundColor:"#ffb300",
      borderRadius:12,
      borderSkipped:false
    }]
  },

  options:{
    responsive:true,

    plugins:{
      legend:{
        display:false
      }
    },

    scales:{
      y:{
        beginAtZero:true,
        grid:{
          color:"#eeeeee"
        }
      },

      x:{
        grid:{
          display:false
        }
      }
    }
  }

});


// BAR CHART OFFICE
const officeBar = new Chart(document.getElementById("officeBar"), {

  type:"bar",

  data:{
    labels:["APRIL","MEI","JUNI","JULI"],

    datasets:[{
      label:"Office",
      data:[15,12,9,6],

      backgroundColor:"#7d132b",
      borderRadius:12,
      borderSkipped:false
    }]
  },

  options:{
    responsive:true,

    plugins:{
      legend:{
        display:false
      }
    },

    scales:{
      y:{
        beginAtZero:true,
        grid:{
          color:"#eeeeee"
        }
      },

      x:{
        grid:{
          display:false
        }
      }
    }
  }

});


// DROPDOWN UPDATE
monthSelect.addEventListener("change",()=>{

  const selected = monthSelect.value;
  const data = dashboardData[selected];

  // UPDATE CARD
  plantSubmit.textContent = data.plantSubmit;
  plantBelum.textContent = data.plantBelum;

  officeSubmit.textContent = data.officeSubmit;
  officeBelum.textContent = data.officeBelum;

  // UPDATE PIE
  plantChart.data.datasets[0].data = [
    data.plantSubmit,
    data.plantBelum
  ];

  officeChart.data.datasets[0].data = [
    data.officeSubmit,
    data.officeBelum
  ];

  plantChart.update();
  officeChart.update();

  // UPDATE BAR
  plantBar.data.datasets[0].data = data.plantBar;
  officeBar.data.datasets[0].data = data.officeBar;

  plantBar.update();
  officeBar.update();

});