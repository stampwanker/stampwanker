  async function initMap() {
     const { Map } = await google.maps.importLibrary("maps");
     const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",
     );
     const advancedMarkers = [...document.querySelectorAll('.gmp-marker-closed')];

     // Loop through the markers
     for (let i = 0; i < advancedMarkers.length; i++) {
	const pin = new PinElement({
	    background: "lightgray",
	    borderColor: "black",
	    glyphColor: "darkgray",
	});

	advancedMarkers[i].appendChild(pin.element);
      }
  }
