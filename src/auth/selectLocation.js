import { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, CircleF } from '@react-google-maps/api'
import settings from '../settings.json'
import { mapStyle } from '../mapStyles'


const Instructions = () => {
    return(
        <div className='top_bar p-4'>
            <span>Drop a pin by clicking on the map or use your current location. This will be saved as your home address</span>
        </div>
    )
}



const Coord_container = (props) => {
    return(
        <div className='row top_bar'>
            <div className='col-6 d-flex flex-column'>
            <div className='coord_text_cont d-flex px-1'><span className='align-middle m-auto text-secondary'>lat: </span><input className='coord_text py-1 px-1' type='text' defaultValue={props?.lat}/></div>
                <button className='clear_btn btn_'>CLEAR</button>
            </div>
            <div className='col-6 d-flex flex-column'>
                <div className='coord_text_cont d-flex px-1'><span className='align-middle m-auto text-secondary'>lon: </span><input className='coord_text py-1 px-1' type='text' defaultValue={props?.lng}/></div>
                <button className='select_btn btn_'>SELECT</button>
            </div>
        </div>
    )
}




const SelectLocation = () => {

    const [topBar, setTopBar] = useState(<Instructions/>)
    const [marker, setMarker] = useState()
    const [circle, setCircle] = useState()
    const [clicked, setClicked] = useState(false)
    const [mapCenter, setMapCenter] = useState({lat: -1.286389, lng: 36.817223})

    const [initialZoom, setInitialZoom] = useState(15)

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: settings.MAPS_API_KEY
    })


    const handleMapClick = (e) => {

        const lat = e.latLng.lat()
        const lng = e.latLng.lng()


        setMarker(<MarkerF position={{lat, lng}}/>)


        setTopBar(<Coord_container lat={lat} lng={lng}/>)
        
    }

    const handleUseCurrentLocation = () => {

        let currentLat
        let currentLng

        navigator.geolocation.getCurrentPosition((geo => 
            {

                currentLat = geo.coords.latitude
                currentLng = geo.coords.longitude

                setMapCenter({lat: currentLat, lng: currentLng})

                setMarker(
                    <MarkerF
                        position={{lat: currentLat, lng: currentLng}}
                        icon={{path: window.google.maps.SymbolPath.CIRCLE, scale: 7, fillColor: "#0165fc", strokeWeight: 0, fillOpacity: 1}}
                    />
                )
            
            }))

    }


    useEffect(() => {
        
        setTimeout(() => {
            if(!clicked){
                setTopBar(<Coord_container/>)
            }
        }, 7000)
    }, [])



    if(!isLoaded){
        return(
            <div>LOADING...</div>
        )
    }

    else{
        return(
            <div className="fullmapcont bg-dark">
                <GoogleMap

                    onClick={(e) => handleMapClick(e)}

                    center={mapCenter}
                    zoom={initialZoom}
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    options={{styles: mapStyle}}
                    >
                    
                    {marker}
                        
                </GoogleMap>
                {topBar}
                <button className='hovering_btn current_location_btn' onClick={handleUseCurrentLocation}>USE CURRENT LOCATION</button>

            </div>
        )
    }
}





export default SelectLocation