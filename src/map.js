import { useJsApiLoader, GoogleMap, Marker, MarkerF, InfoWindowF } from "@react-google-maps/api";
import technician_man from './technician_man.png'
import settings from './settings.json'
import { useEffect, useState } from "react";




export const ShowMap = () => {

    const [zoom, setZoom] = useState(15)

    // useEffect(() => {
    //     setTimeout(() => setZoom(zoom-.04), 500)
    // }, [zoom])

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: settings.MAPS_API_KEY
    })


    const marker = () =>  <MarkerF
                        position={{lat: -1.286389, lng: 36.817223}}
                        icon={{url: technician_man, scaledSize: new window.google.maps.Size(40,40)}}
                        options={{scaledSize: new window.google.maps.Size(.5,.5)}}
                        draggable={true}
                    />

    const defaultMapOptions = [
        {
          featureType: "administrative",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]

    const tryme = () => {
      console.log(navigator.geolocation.getCurrentPosition((l)=>console.log(l)))
    }


    if(!isLoaded) {
        return(<div>LOADING...</div>)
    } else{


    return(
      <div>
        
                <GoogleMap

                onClick={(e) => console.log(e.latLng.toString())}

                
                    id='475720a0b4ee3a1d'
                
                    center={{lat: -1.286389, lng: 36.817223}}
                    zoom={zoom}
                    mapContainerStyle={{width: '50rem', height: '50rem'}}
                    options={{styles: defaultMapOptions}}
                >
                    {marker()}
                </GoogleMap>

                <button onClick={()=> tryme()}>TRY ME</button>
      </div>
            
    )
    }

}

