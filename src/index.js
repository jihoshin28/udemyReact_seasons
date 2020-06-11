import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            season: null
        }
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => checkSeason(position),
            (err) => console.log(err)
            
        );
    
        let checkSeason = (position) => {
            console.log(position.coords.latitude)
            let latitude = position.coords.latitude
            let today = new Date()
            let month = today.getMonth() + 1
            let season
            if(latitude > 0){
                if (month > 3 && month < 10) {
                    setSeason('summer')
                } else {
                    setSeason('winter')
                }
            } else {
                if (month > 3 && month < 10) {
                    setSeason('winter')
                } else {
                    setSeason('summer')
                }
            }
            return season
        }

        let setSeason = (season) => {
            this.setState({
                season: season
            })
            console.log(this.state)
        }

    
        return (
            <div>
                <h1>Hello</h1>
                <SeasonDisplay season={this.state.season} />
            </div>

        )
    }
    
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)