import React from 'react';

import PlacesAutocomplete, { geocodeByAddress,geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
// import '../styles/styles.scss'

const selectPlace={
    color:"#212529",
    position: "absolute",
    zIndex:10,
    width:"90%",
    opacity: 0.6,
    fontSize:15,
    lineHeight:2
}

class LocationSearchInput extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            latLng:[]
        }
    }

   
    handleChange = (address) => {
        this.setState({ address })
        
    }
     
      handleSelect = (address) => {
        //   console.log(address)
        this.props.handleSelectCity(address)
        geocodeByAddress(address)
       
          .then(results =>  getLatLng(results[0]))
            .then(latLng => {
                // console.log('Success', latLng)
                this.setState({latLng})
                // console.log(this.state.latLng,'statelatlong')

                this.props.handleSelectPlace(latLng,this.state.address)
            })
            .catch(error => console.error('Error1', error));
              
      }
      

    render() {
        // console.log(this.props,'props in location')
       
        // console.log(this.state.address,'address')
        return (

            <div>
                
                <PlacesAutocomplete
                className=' date-picker upPad-width'
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                // handleSelectPlaceChange={this.handleSelectPlaceChange}

                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search place name',
                                className: 'location-search-input form-control',
                            })}
                        />
                      

                       <div className="autocomplete-dropdown-container" style={selectPlace}>
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>

                       


                    </div>
                )}
            </PlacesAutocomplete>
            </div>
        )
    }
}
export default LocationSearchInput