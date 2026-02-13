mapboxgl.accessToken = 'pk.eyJ1IjoicGF1LXZpY3RvIiwiYSI6ImNta2Rib2s1bTA5d2MzZW9vaGF2a3hrczkifQ.ie1nrw6qR60q70TUdf5B_w';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/pau-victo/cmldhwais00d401qq1p97ayx5',
    center: [-79.39471475781137, 43.65211471282889],
    zoom: 13.8,
});
//Found TTC subway lines shapefile from City of Toronto Open Data Portal and converted to vector tileset on Mapbox Studio//
    map.addSource('ttc_subway', {
        'type': 'vector',
        'url': 'mapbox://pau-victo.b39znm2z'
    });
    //Included opacity to make subway lines less of a priority and more of a distance reference//
    map.addLayer({
        'id': 'ttc_subway_lines',
        'type': 'line',
        'source': 'ttc_subway',
        'paint': {
            'line-color': '#555555',
            'line-width': 1.3,
            'opacity': 0.4
        },
        'source-layer': 'ttc-subway-shapefile-wgs84-1sh8u5'
    });
//End of subway lines layer//

//Created GeoJSON linestring for Route before class; made different geoJSON files to change individual colors/symbols//
    map.addSource('route_before_class', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/route_before_class.geojson'
    });
    map.addLayer({
        'id': 'route_before_class',
        'type': 'line',
        'source': 'route_before_class',
        'paint': {
            'line-color': '#1f3a5f',
            'line-width': 3
        }
    });
//End of route before class Layer//

//Created GeoJSON linestring for Route after class//
    map.addSource('route_after_class', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/route_after_class.geojson'
    });
    map.addLayer({
        'id': 'route_after_class',
        'type': 'line',
        'source': 'route_after_class',
        'paint': {
            'line-color': '#6fa8dc',
            'line-width': 3
        }
 });
//end of route after class Layer//

//Added in GeoJSON files for picnic polygon, cafes along route, home point and class point As seperate files//
    map.addSource('picnic_polygon', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/picnic_polygon.geojson'
    });
    map.addLayer({
        'id': 'picnic_polygon',
        'type': 'fill',
        'source': 'picnic_polygon',
        'paint': {
            'fill-color': '#60ce21',
            'fill-opacity': 0.4
        }
    });
    map.addSource('cafe_along_route', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/cafe_along_route.geojson'
    });
    //Found symbol used also in styling editor mapbox, except done manually in JS code to add symbols//
    map.addLayer({
        'id': 'cafe_along_route',
        'type': 'symbol',
        'source': 'cafe_along_route',
        'layout': {
            'icon-image': 'cafe',
            'icon-size': 1.1,
            'icon-allow-overlap': true
        }
    });
    map.addSource('home_point', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/home_point.geojson'
    });
    map.addLayer({
        'id': 'home_point',
        'type': 'symbol',
        'source': 'home_point',
        'layout': {
            'icon-image': 'star',
            'icon-size': 1.3,
            'icon-allow-overlap': true
        },
    });
    map.addSource('class_point', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/PauVicto/ggr472-lab2/refs/heads/main/data/class_point.geojson'
    });
    map.addLayer({
        'id': 'class_point',
        'type': 'symbol',
        'source': 'class_point',
        'layout': {
            'icon-image': 'building',
            'icon-size': 1.5,
            'icon-allow-overlap': true
        }
    });
//End of geoJson layers for interactive webmap//