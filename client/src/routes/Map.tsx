import React, { useEffect, useRef } from 'react'
import Route from '../components/templates/Route'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export interface MarkerProps {
    markersData: any
}

export interface MarkerData {
    title: any
    latLng: MarkerDataAttributes
}

export interface MarkerDataAttributes {
    lat: any
    lng: any
}

const style = {
  width: "100%",
  height: "500px"
};

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

function Map({markersData}: MarkerProps) {
  // create map

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [58.473829, 26.732799],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(
    () => {
      markersData.map((marker: any) => {
        L.marker(marker[0][0]).bindPopup(`${marker[0][1]}`, {maxWidth: 700}).openPopup().addTo(
          layerRef.current
        )
      })
    },
    [markersData]
  );

  return (
            <Route title="">
                  <div id="map" style={style}/>
            </Route>
         )
}

export default Map;