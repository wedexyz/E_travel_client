
    

  
navigator.geolocation.getCurrentPosition(function(location) {
    var latlng = new L.LatLng(location.coords.latitude,location.coords.longitude,);

    var tileLayer = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}');


    var mymap = new L.Map('map', {
   'center': [location.coords.latitude, location.coords.longitude],
   'zoom': 14,
   'draggable': true,
   'layers': [tileLayer]
   });


           
var marker = L.marker([location.coords.latitude,location.coords.longitude,],{
  draggable: true,
  clickable: true,
 
            
}).
addTo(mymap)
.bindPopup('<div class="row no-gutters"><div></div><div class="col-auto align-self-center" style="padding:1px;"></div></div><hr style="width:700px"><table id="tabel-status-jsa" class="table animate-left"><thead class="thead-transparent"  style=" text-shadow: -1px -1px 6px black;color: #b3d7ff;" ><tr><th scope="col">aksi</th><th scope="col">Nama User </th></tr></thead><tbody  style=" text-shadow: -1px -1px 6px black;color: #b3d7ff;"></tbody></table> ')


marker.on('click', function () {
updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
CariData()
});


function updateLatLng(lat,lng,reverse) {
  if(reverse) {
  marker.setLatLng([lat,lng]);
  map.panTo([lat,lng]);
  } else {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;
  
  }
  }$(function () {
      $('#ModalUpdate').on('click', function () {
          var text = $('#t4_longclient_jsa');
          text.val(document.getElementById('longitude').value);
          var text = $('#t4_latclient_jsa');
          text.val(document.getElementById('latitude').value);
  
      });
  }
  
  
  );
  
  });
      /*

    var mymap = L.map('map').setView(latlng, 15)
	  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: '',
    draggable: true,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
	  }).addTo(mymap);




*/
 


/*
  var iconOptions = {
            iconUrl: 'icon1.png',
            iconSize:     [90, 65],
         
         }
         // Creating a custom icon
         var customIcon = L.icon(iconOptions);
                 
var marker = L.marker([location.coords.latitude,location.coords.longitude,],{
  draggable: true,
  title: "MyLocation",
            clickable: true,
            draggable: true,
            icon: customIcon
       

*/
//on('click', markerOnClick).

/*
.openPopup();

marker.on({
click: function (e) {
  $("#feature-title").html(myMarkerTitle);
  $("#feature-info").html(myMarkerContent);
  $("#featureModal").modal("show");
}
}); 
function markerOnClick(e)
{
  alert("hi. you clicked the marker at " + e.latlng);
}
*/

