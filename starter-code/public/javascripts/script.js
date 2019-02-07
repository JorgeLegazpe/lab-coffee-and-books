document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.4167, lng: -3.70325 },
    zoom: 15
  });
}

function startMap() {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: ironhackBCN
  });
}

function showMarkers() {
  axios.get(`http://localhost:3000/map`).then(places => {
    places.data.forEach(place => {
      console.log("ESto es: " + place.location.coords.lat);
      new google.maps.Marker({
        map: map,
        position: {
          lat: 41.3977381,
          lng: 2.190471916
          // lat: place.location.coords.lat,
          // lng: place.location.coords.lng
        },
        title: place.name
      });
    });
  });
}

initMap();
startMap();
showMarkers();
