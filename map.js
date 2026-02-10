mapboxgl.accessToken = 'pk.eyJ1IjoicGF1LXZpY3RvIiwiYSI6ImNta2Rib2s1bTA5d2MzZW9vaGF2a3hrczkifQ.ie1nrw6qR60q70TUdf5B_w';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/pau-victo/cmldhwais00d401qq1p97ayx5',
    center: [-79.39706250309841, 43.651631049876336],
    zoom: 13.5,
});

map.on('load', () => {
    map.addSource('ttc_subway', {
        'type': 'vector',
        'url': 'mapbox://pau-victo.b39znm2z'
    });
    map.addLayer({
        'id': 'ttc_subway_lines',
        'type': 'line',
        'source': 'ttc_subway',
        'paint': {
            'line-color': '#2f31b1',
            'line-width': 1.5
        },
        'source-layer': 'ttc-subway-shapefile-wgs84-1sh8u5'
    });
    map.addSource('Day_Routes', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/Day_Routes.geojson'
    });
    map.addLayer({
        'id': 'route-before-class',
        'type': 'line', 
        'source': 'Day_Routes',
        'paint': {
            'line-color': '#ff0000',
            'line-width': 2
        }
    });
    map.addLayer({
        'id': 'route-after-class',
        'type': 'line', 
        'source': 'Day_Routes',
        'paint': {
            'line-color': '#00ff00',
            'line-width': 2
        }
    });
});
