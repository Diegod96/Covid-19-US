<script context="module">
    import stateNames from '../data/stateNames.js';
    import requests from "../data/requests.js";

    export async function preload(page) {
        const state = page.params["state"];
        if (stateNames.find(s => s.abbreviation === state) === undefined) {
            // console.log("should get error");
            this.error(404, 'State Not Found');
            return;
        }
        const fullStateName = stateNames.find(s => s.abbreviation === state).name;

        try {
            const stats = await requests.stateStats(state);
            const historic = await requests.historicState(state);
            // console.log(stats);
            return {state: fullStateName, stats, historic};

        } catch (e) {
            // console.log(e);
            this.error(500, "There was an error in calling the api, please try again in 5 minutes.");
            return;

        }

        return {state: page.params['state']};
    }
</script>

<script>
    import CovidStats from "../components/CovidStats.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let state;
    export let stats;
    export let historic;
</script>

<svelte:head>
    <title>Covid-19 US Dashboard</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid-19 - {state}</h1>
    </div>
</div>


<CovidStats {...stats}/>
<CovidChart historicData={historic} title="Covid-19 - {state}" />
