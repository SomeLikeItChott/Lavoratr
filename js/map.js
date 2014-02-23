
var currentPosition ={lat:0, lng:0}

var tIcon = L.icon({
    iconUrl: 'img/Toilet.png',
    shadowUrl: 'img/Toilet_drop.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [16, 32], // size of the shadow
    iconAnchor:   [22, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [9, 22],  // the same for the shadow
    popupAnchor:  [-7, -20] // point from which the popup should open relative to the iconAnchor
    });

var uIcon = L.icon({
  iconUrl: 'img/peeman.png',
  shadowUrl: 'img/peeman.png',
  iconSize: [20, 40],
  shadowSize: [20, 40],
  iconAnchor: [10, 30],
  shadowAnchor: [10, 30],
  popupAnchor: [-7, -5]
});

var mIcon = L.icon({
  iconUrl: 'img/Toilet_M.png',
    shadowUrl: 'img/Toilet_drop.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [16, 32], // size of the shadow
    iconAnchor:   [22, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [9, 22],  // the same for the shadow
    popupAnchor:  [-7, -20] // point from which the popup should open relative to the iconAnchor
})

var fIcon = L.icon({
  iconUrl: 'img/Toilet_F.png',
    shadowUrl: 'img/Toilet_drop.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [16, 32], // size of the shadow
    iconAnchor:   [22, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [9, 22],  // the same for the shadow
    popupAnchor:  [-7, -20] // point from which the popup should open relative to the iconAnchor
})

jQuery(document).ready(function() {
  
  venue_latlng = [36.1509, -95.9464];
  

  
  map = L.mapbox.map('map', 'username44.hbhcfpoe').setView(venue_latlng,16);
<<<<<<< HEAD
  
=======
    
>>>>>>> eeec6b5e28c6be7d66067b78605696024f8f9b38
  var distWatchID,
      posOptions = {enableHighAccuracy: true},
      user_marker = L.marker([0,0], {icon: uIcon}).addTo(map),
      new_position = function(pos) {
          //var pos_accuracy = pos.coords.accuracy;
          map.user_position = new L.LatLng(pos.coords.latitude, pos.coords.longitude);
          user_marker.setLatLng(map.user_position);
          //user_marker.setAccuracy(pos_accuracy);
          map.setView(map.user_position,18)

      },
      appPosFail = function (err) {
          if (err){
              console.warn('ERROR(' + err.code + '): ' + err.message);
          }
      }

      var fireRef = new Firebase('https://lavoratr.firebaseio.com/');
		fireRef.on('child_added', function(snapshot) {
	  		var latData = (snapshot.val()).latitude;
  			var longData = (snapshot.val()).longitude;
  			var tMark = L.marker([latData,longData], {icon: tIcon}).addTo(map);
  			
  			if((snapshot.val()).nameOfLocation == undefined)
  				var nam = "ERROR please contact admin<br>";
  			else
  				var nam = (snapshot.val()).nameOfLocation + "<br>";
  			if((snapshot.val()).gender == undefined)
  				var gen = "";
  			else
  				var gen = (snapshot.val()).gender;
  			if((snapshot.val()).typeOfLocation == undefined)
  				var loc = "<br>";
  			else
  				var loc = (snapshot.val()).typeOfLocation + "<br>";
  			if((snapshot.val()).quality == undefined)
  				var qua = "";
  			else
  				var qua = "<br>rating: " + (snapshot.val()).quality;
  			if((snapshot.val()).numSinks == undefined)
  				var sin = "";
  			else
  				var sin = "<br>sinks: " + (snapshot.val()).numSinks;
  			if((snapshot.val()).numUrinals == undefined)
  				var uri = "";
  			else
  				var uri = "<br>urinals: " + (snapshot.val()).numUrinals;
  			if((snapshot.val()).numStalls == undefined)
  				var sta = "";
  			else
  				var sta = "<br>stalls: " + (snapshot.val()).numStalls;
  			if((snapshot.val()).accessible == undefined)
  				var acc = "";
  			else
  				var acc = "<br>handicapped accessible: " + (snapshot.val()).accessible;
  				
  			var form = "<form><input type='number' id='rated' name='numberOfSinks' min='1' max='10'></input></form>";
  			var quality = $('#Quality').val();
  			
  			var tPop = L.popup().setContent(
					nam +
					gen + " " + loc +
					qua +
					sin +
					uri +
					sta +
					acc +
					"<br>" + form
  				);
  			tMark.bindPopup(tPop);
		});
    
    distWatchID = navigator.geolocation.watchPosition(new_position, appPosFail, posOptions);
     
      //beginning of things that Sam added
});
//       tulsaLoc = L.marker([36.1522, -95.9464], {icon: tIcon}).addTo(map);
//                   
//       tulsaLoc.bindPopup("Pop up is <i>amazing</i>");
// 		
// 		//end of things that Sam added
		
// 		//copypaste start
// 		$(document).ready(function () {
//     updateContainer();
//     $(window).resize(function() {
//         updateContainer();
//     });
// });
// function updateContainer() {
//     var $containerHeight = $(window).height();
//     if ($containerHeight <= 818) {
//         $('.my_arbitrary_id').css({
//             position: 'static',
//             bottom: 'auto',
//             left: 'auto'
//         });
//     }
//     if ($containerHeight > 819) {
//         $('.my_arbitrary_id').css({
//             position: 'absolute',
//             bottom: '3px',
//             left: '0px'
//         });
//     }
// }
// //copypaste end

//});
  
  
