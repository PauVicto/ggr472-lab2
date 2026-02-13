mapboxgl.accessToken = 'pk.eyJ1IjoicGF1LXZpY3RvIiwiYSI6ImNta2Rib2s1bTA5d2MzZW9vaGF2a3hrczkifQ.ie1nrw6qR60q70TUdf5B_w';
//map access token and mapbox style from created mapbox style editor for full map of combined GeoJSON files from Lab 1//
const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/pau-victo/cml2sozh7000t01qmfjky3hs7',
    center: [-79.39865, 43.66234],
    zoom: 13,
});