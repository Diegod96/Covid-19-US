
import axios from 'axios';
import parsers from './parsers';


async function usStats() {
    const response = await axios.get("https://covidtracking.com/api/v1/us/current.json");
    return parsers.usStats(response.data)
}

async function stateStats(state) {
    const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
    return parsers.statesStats(state, response.data);
}

async function historicUS() {
    const response = await axios.get('https://covidtracking.com/api/us/daily');
    return parsers.historicUS(response.data);

}

export default{
    usStats,
    stateStats,
    historicUS,
}
