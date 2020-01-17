import React, { PureComponent } from 'react'
import Route from '../components/templates/Route'
import { User } from '../context'
import { Logger } from '@oceanprotocol/squid'
import 'leaflet/dist/leaflet.css'
import Map from "./Map";


export interface MarkerState {
    // markersData: MarkerData
    results: any[]
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

export default class ShowMarker extends PureComponent<{}, MarkerState> {
    public state = { results: [] }
        public _isMounted = false

    public componentDidMount() {
        this._isMounted = true
        this._isMounted && this.getMarker()
    }


    private getMarker = async () => {
        const { ocean } = this.context

        const searchQuery = {
            query: {
              text: ['meadow']
            },
            sort: {
                created: -1
            }
        }


        try {
            const search = await ocean.assets.query(searchQuery)
            // const searchMetadata = await search.map((asset: any) => (asset.findServiceById(2)))
            this.setState({
                results: search.results.map((asset: any) => [[((asset.findServiceById(2)).attributes.additionalInformation.dataLocation)].map((asset: any) => asset.split(", ").map((asset: any) => parseFloat(asset))).concat([(asset.findServiceById(2).attributes.main.name)])])
                  // .map((asset: any) => asset.split(", ").map((asset: any) => parseFloat(asset)))
                  // .concat([search.results.map((asset: any) => (asset.findServiceById(2).attributes.main.name))])
                
            })
            const { results } = await this.state
            console.log(results)
            
        } catch (error) {
            Logger.error(error.message)
            
        }
        // const { markersData } = await this.state
        // console.log(searchMetadata)

    }






    public render() {
      const { results } = this.state
  return (
            <Route title="">

                  <div style={style}>

                  <Map markersData={results} />

                  </div>
            </Route>
         )
}
}

ShowMarker.contextType = User