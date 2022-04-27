import {stations} from './stations.js'

const api = document.getElementById("api");

console.log(stations)

api.innerHTML = JSON.stringify(stations)