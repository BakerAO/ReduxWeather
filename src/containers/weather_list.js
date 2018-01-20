import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => ((weather.main.temp * 1.8) - 459.67));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        const highs = cityData.list.map(weather => ((weather.main.temp_max * 1.8) - 459.67));
        const lows = cityData.list.map(weather => ((weather.main.temp_min * 1.8) - 459.67));

        function highTemp(highs){
            return _.round(_.max(highs));
        }
        
        function lowTemp(lows){
            return _.round(_.min(lows));
        }

        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="F" />
                    <div>
                        High: {highTemp(highs)}  Low: {lowTemp(lows)}
                    </div>
                </td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// ES6 syntax practice
function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);