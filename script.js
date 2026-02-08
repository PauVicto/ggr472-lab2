mapboxgl.accessToken = 'pk.eyJ1IjoicGF1LXZpY3RvIiwiYSI6ImNta2Rib2s1bTA5d2MzZW9vaGF2a3hrczkifQ.ie1nrw6qR60q70TUdf5B_w';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/pau-victo/cml2sozh7000t01qmfjky3hs7',
    center: [-79.39865, 43.66234],
    zoom: 13,
});

map.on('load', () => {
    map.addSource('census_tracts', {
        'type': 'vector',
        'url': 'mapbox://pau-victo.ar635fvc'
    });
    map.addLayer({
        'id': 'Toronto_censustracts_outlines', 
        'type': 'line',
        'source': 'census_tracts', 
        'paint': {
            'line-color': '#0f118f', 
            'line-width': 1.5
        },
        'source-layer': 'torontoct-98sxd6'
});
    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/buildings.geojson/wk5-data/buildings.geojson' // Your URL to your buildings.geojson file
    });
map.addLayer({
    'id': 'buildings-point',
    'type': 'circle',
    'source': 'buildings-data',
    'paint': {
        'circle-radius': 5,
        'circle-color': '#0f118f'
    }
});
});
