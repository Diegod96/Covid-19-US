# Covid-19 Dashboard for the United States

<img width="937" alt="usa" src="https://user-images.githubusercontent.com/25403763/88332663-e68c4a00-ccfc-11ea-9807-b2fa3b2127a0.PNG">

* Web dashboard that allows the user to view data about Covid-19 for the United States and the individual states.
* Can be found at https://hardcore-ramanujan-a1457f.netlify.app/

# Code & Resources
* **Svelte Version:** 3.0.0
* **Libraries Used:** Axios,Polka, Bulma, Chart-Js, Sapper
* **Source of Data:** https://covidtracking.com/

# Components
* There are six components
1. CovidChart.svelte
2. CovidStats.svelte
3. Nav.svelte
4. Table.svelte
5. TableContainer.svelte
6. TableFilter.svelte

## Covid Chart
* Creates the chart and binds it to the chart element
```
function createChart() {
        chart = new Chart(chartElement.getContext("2d"), {
            type: "line",
            data: {
                datasets: historicData
            },
            options: {
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].label;
                            label += ": ";
                            label += tooltipItem.yLabel.toLocaleString();
                            return label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: title
                },
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            time: {
                                parser: "M/D/YY",
                                tooltipFormat: "ll"
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Date"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function(value, index, values) {
                                    return value.toLocaleString();
                                }
                            }
                        }
                    ]
                }
            }
        });
    }
  ```
  ## Covid Stats
  * Displays stats to the user such as cases, deths, tested, etc.
  
  ## Nav
  * Nav creates the navbar on the top of the page.
  
  ## Table
  * Creates the table at the bottom half of the page.
  * Populates it with states and their number of cases, deaths, and total tested.
  
  ## Table Container
  * Handles the sort drop down that sorts state by most cases, deaths, and total tested
  ```
  function filterAndSort(states, stateName, sortBy) {
        const filteredStates = states.filter(state => {
            return (
                    stateName === "" ||
                    state.fullStateName.toLowerCase().indexOf(stateName.toLowerCase()) > -1
            );
        });
        if (sortBy !== "name") {
            return filteredStates.sort((a, b) => {
                return +(b[sortBy].replace(',', '')) - +a[sortBy].replace(',', '');
            });
        }
        return filteredStates;
    }
 ```
 
 ## Table Filter
 * Handles the search bar that allows the user to filter a state by its name.
 * That states data is then presented as well.
 
 # Data
 * Handles formatting, parsing, requests, and provides state names and abbreviations.
 * Snipped of requests:
 ```
 async function usStats() {
    const response = await axios.get("https://covidtracking.com/api/v1/us/current.json");
    return parsers.usStats(response.data)
}

async function statesData() {
    const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
    return parsers.stateTable(response.data);
}

async function stateStats(state) {
    const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
    return parsers.statesStats(state, response.data);
}

async function historicUS() {
    const response = await axios.get('https://covidtracking.com/api/us/daily');
    return parsers.historicUS(response.data);
}

async function historicState(state) {
    const response = await axios.get('https://covidtracking.com/api/v1/states/daily.json');
    return parsers.historicState(state, response.data);
}

export default {
    usStats,
    stateStats,
    historicUS,
    historicState,
    statesData,
}
```

 # Routes
 * Handles different types of routes such as error page and the about page.
 * [state].svelete wraps all of the components up and displays them to the viewer.
 
 
 
  
