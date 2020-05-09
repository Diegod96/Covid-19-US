

<script context="module">
    export async function preload(page) {
        return { state: page.params['state'] };
    }
</script>

<script>
    import CovidStats from "../components/CovidStats.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let state;
</script>

<h1>{state}</h1>

<CovidStats />
<CovidChart />
