/**
 * Created by itamar on 16/10/2019.
 */

var realtime = L.realtime({
        url: 'http://localhost:5000/',
        crossOrigin: true,
        type: 'json'
    }, {
        interval: 3 * 1000
    });
realtime.addTo(map)

realtime.on('update', function() {
    map.fitBounds(realtime.getBounds(), {maxZoom: 9});
});