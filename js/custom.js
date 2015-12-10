;(function() {

	// function initialize() {
 //        var mapCanvas = document.getElementById('map');
 //        var mapOptions = {
 //            center: new google.maps.LatLng(44.5403, -78.5463),
 //            zoom: 8,
 //            mapTypeId: google.maps.MapTypeId.ROADMAP
 //        }
 //            var map = new google.maps.Map(mapCanvas, mapOptions)
 //        }
 //    google.maps.event.addDomListener(window, 'load', initialize);

	 function initialize() {
	    var config = [
	        {
	            "featureType": "administrative",
	            "elementType": "labels.text.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "administrative.country",
	            "elementType": "geometry.stroke",
	            "stylers": [
	                {
	                    "color": "#deb8cd"
	                }
	            ]
	        },
	        {
	            "featureType": "administrative.country",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#90756a"
	                }
	            ]
	        },
	        {
	            "featureType": "administrative.province",
	            "elementType": "geometry.stroke",
	            "stylers": [
	                {
	                    "color": "#dadada"
	                }
	            ]
	        },
	        {
	            "featureType": "administrative.province",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#ac9173"
	                }
	            ]
	        },
	        {
	            "featureType": "administrative.locality",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#6e6d6c"
	                }
	            ]
	        },
	        {
	            "featureType": "landscape",
	            "elementType": "labels.text.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "landscape.man_made",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#ffffff"
	                }
	            ]
	        },
	        {
	            "featureType": "landscape.natural",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#e7f3df"
	                }
	            ]
	        },
	        {
	            "featureType": "landscape.natural.terrain",
	            "elementType": "geometry",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "poi",
	            "elementType": "labels.text.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.business",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#c2d4f3"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.business",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#4f6177"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.government",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#9d5050"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.medical",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#dceaf5"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.medical",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#6ca5d4"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.park",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#c0e6c8"
	                }
	            ]
	        },
	        {
	            "featureType": "poi.school",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#f0d7d7"
	                }
	            ]
	        },
	        {
	            "featureType": "road",
	            "elementType": "geometry.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "road",
	            "elementType": "labels.text.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "road.highway",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#fcd49a"
	                }
	            ]
	        },
	        {
	            "featureType": "road.highway.controlled_access",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#ffe5aa"
	                }
	            ]
	        },
	        {
	            "featureType": "road.arterial",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#f9eac6"
	                }
	            ]
	        },
	        {
	            "featureType": "road.arterial",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#6b6b6b"
	                }
	            ]
	        },
	        {
	            "featureType": "road.local",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#fbf7f2"
	                }
	            ]
	        },
	        {
	            "featureType": "road.local",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#969b9d"
	                }
	            ]
	        },
	        {
	            "featureType": "transit",
	            "elementType": "geometry.stroke",
	            "stylers": [
	                {
	                    "color": "#bbafb9"
	                }
	            ]
	        },
	        {
	            "featureType": "transit",
	            "elementType": "labels.text.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "transit.line",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "color": "#e7c4d9"
	                }
	            ]
	        },
	        {
	            "featureType": "transit.station.airport",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "hue": "#00caff"
	                }
	            ]
	        },
	        {
	            "featureType": "transit.station.bus",
	            "elementType": "labels.icon",
	            "stylers": [
	                {
	                    "hue": "#ffb200"
	                }
	            ]
	        },
	        {
	            "featureType": "transit.station.rail",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#604356"
	                }
	            ]
	        },
	        {
	            "featureType": "water",
	            "elementType": "geometry.fill",
	            "stylers": [
	                {
	                    "visibility": "on"
	                },
	                {
	                    "color": "#bee7f0"
	                }
	            ]
	        },
	        {
	            "featureType": "water",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#81a0c1"
	                }
	            ]
	        },
	        {
	            "featureType": "water",
	            "elementType": "labels.text.stroke",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        }
	    ],
	    location = new google.maps.LatLng(-6.2548871,106.8265833),
	    centerLocation = new google.maps.LatLng(-6.254,106.8265833),
	    mapOptions = {
	        center: centerLocation,
	        zoom: 18,
	        styles: config,
	        scrollwheel: false,
	        panControl: false,
	        mapTypeControl: false,
	        streetViewControl: false,
	        zoomControl: true,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.LARGE,
	            position: google.maps.ControlPosition.LEFT_TOP
	        },
	    },
	    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
	    marker = new google.maps.Marker({
	        position: location,
	        map: map,
	        title: 'Sagara',
            // icon: 'img/contact.png'
	    }),
	    infowindow = new google.maps.InfoWindow({
	        content: '' +
	            '<article class="map-info row">' +
                    '<h3>17144</h3>' +
                    '<p class="">Jl. Mampang Prapatan Raya 108<br>Rukan Buncit Mas, Blok C3A<br>' +
                        'Duren Tiga, Jakarta 12760<br>' +
                        'Indonesia</p>' +
	            '</article>',
	        maxWidth: 600
	    });

	    google.maps.event.addListener(marker, 'click', function () {
	        infowindow.open(map, marker);
	    });
	    infowindow.open(map, marker);
	}
	google.maps.event.addDomListener(window, 'load', initialize);


})();