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
            'line-color': '#7e80f7',
            'line-width': 1.3,
            'opacity': 0.4
        },
        'source-layer': 'ttc-subway-shapefile-wgs84-1sh8u5'
    });

    map.addSource('route_before_class', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/route_before_class.geojson'
    });
    map.addLayer({
        'id': 'route_before_class',
        'type': 'line',
        'source': 'route_before_class',
        'paint': {
            'line-color': '#ce85ff',
            'line-width': 3
        }
    });

    map.addSource('route_after_class', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/route_after_class.geojson'
    });
    map.addLayer({
        'id': 'route_after_class',
        'type': 'line',
        'source': 'route_after_class',
        'paint': {
            'line-color': '#ff92ed',
            'line-width': 3
        }
    });
    map.addSource('picnic_polygon', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/picnic_polygon.geojson'
    });
    map.addLayer({
        'id': 'picnic_polygon',
        'type': 'fill',
        'source': 'picnic_polygon',
        'paint': {
            'fill-color': '#a3f375',
            'fill-opacity': 0.3
        }
    });
    map.addSource('cafes_along_route', { 
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/cafes_along_route.geojson'     
    });
    map.addLayer({
        'id': 'cafes_along_route',
        'type': 'symbol',
        'source': 'cafes_along_route',
        'layout': {
            'icon-image': 'cafe',
            'icon-size': 1.5,
            'icon-allow-overlap': true
        }
    });    
});

