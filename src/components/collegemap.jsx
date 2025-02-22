import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const MapComponent = () => {
  useEffect(() => {
    const lat = 20.950917 
    const lng = 79.028557

    const map = L.map("map").setView([lat, lng], 14)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
    }).addTo(map)

    const icon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    // Add marker with popup
    L.marker([lat, lng], { icon }).addTo(map).bindPopup("IIIT Nagpur").openPopup()

    // Cleanup
    return () => {
      map.remove()
    }
  }, [])

  return <div id="map" className="h-[200px] w-full rounded-lg mt-4 z-0" />
}
export default MapComponent;
