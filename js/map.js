/**
 * Created by itamar on 16/10/2019.
 */


var map = L.map('map').setView([32,35], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
