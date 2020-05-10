<script context="module">
    import requests from "../data/requests";
    export async function preload() {
        try {
            throw new Error('this is bad :(');
            const usStats = await requests.usStats();
            return  { usStats }
        } catch (e) {
            this.error(500, "There was an error in calling the api, please try again in 5 minutes.");
            return;
        }
    }
</script>



<script>
    import CovidStats from "../components/CovidStats.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let usStats;
    console.log(usStats, 'usStats')
</script>

<svelte:head>
    <title>Covid-19 US Dashboard</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid-19 - US</h1>
    </div>
</div>

<CovidStats {...usStats} />
<CovidChart />
<TableContainer />
