import { useEffect, useRef, useState } from "react";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
interface ILocationSelectorProps {
  value?: string;
  disabled: boolean;
  onChange: (value: string) => void;
}
const LocationSelector = ({ onChange }: ILocationSelectorProps) => {
  // function getLngLatFromString(value: string | undefined) {
  //   let formedValue = value?.split(",");
  //   if (formedValue?.length !== 2) return { lng: 0, lat: 0 };
  //   return {
  //     lng: parseFloat(formedValue ? formedValue[0] : "0"),
  //     lat: parseFloat(formedValue ? formedValue[1] : "0"),
  //   };
  // }
  const [map, setMap] = useState<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [lng, setLng] = useState<number>();
  const [lat, setLat] = useState<number>();
  const [zoom, setZoom] = useState(10);
  const [marker, setMarker] = useState<any>(null);

  useEffect(() => {
    if (!lat || !lng) return;
    onChange(lng.toString() + "," + lat.toString());
  }, [lat, lng]);
  useEffect(() => {
    if (!mapContainerRef.current) return; // initialize map only once
    let mapInstance = new nmp_mapboxgl.Map({
      mapType: nmp_mapboxgl.Map.mapTypes.neshanRasterNight,
      container: mapContainerRef.current,
      zoom: zoom,
      pitch: 0,
      center: [59.55, 36.32],
      minZoom: 2,
      maxZoom: 21,
      trackResize: true,
      mapKey: "web.c72ebf6e6a6b4605a682da3bb62cc46a",
      poi: true,
      traffic: false,
      mapTypeControllerOptions: {
        show: false,
        position: "bottom-left",
      },
    });

    setMap(mapInstance);
  }, [mapContainerRef]);

  useEffect(() => {
    if (!map) return;
    // Get the user's current location
    // navigator.geolocation.getCurrentPosition((position) => {
    //   const userLng = position.coords.longitude;
    //   const userLat = position.coords.latitude;

    //   setLng(userLng);
    //   setLat(userLat);

    //   // Add a marker to the current location
    //   let newMarker = new nmp_mapboxgl.Marker()
    //     .setLngLat([userLng, userLat])
    //     .addTo(map);

    //   setMarker(newMarker);

    //   // Center the map on the user's location
    //   map.setCenter([userLng, userLat]);
    // });

    map.on("click", (event: any) => {
      const { lng, lat } = event.lngLat;
      setLat(lat);
      setLng(lng);
      if (marker) {
        marker.setLngLat(event.lngLat);
      } else {
        const newMarker = new nmp_mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map);
        setMarker(newMarker);
      }
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.on("error", (error: any) => {
      console.error("Map error:", error);
    });
  }, [map, marker]);

  return <div ref={mapContainerRef} className="h-[300px] w-full rounded-2xl" />;
};

export default LocationSelector;
