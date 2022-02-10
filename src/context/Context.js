import React, { useState } from 'react';
import axios from 'axios';

const Context = React.createContext()

const ContextProvider = (props) => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [value, setValue] = useState('')
    const [locations, setLocations] = useState([])
    const [weatherData, setWeatherData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const CORS_URL = 'https://the-ultimate-api-challenge.herokuapp.com/'
    const API_URL = 'https://www.metaweather.com/api/location/'

    const onChange = async (param) => {
        setValue(param)
        const res = await axios.get(`${CORS_URL}${API_URL}search/?query=${param}`)

        if (res.data.length < 1) {
            setError(true)
            
        } else {
            setError(false)
            setLocations(res.data)
        }
    }

    const getWeather = async (location) => {
        // get woeid
        setLoading(true)
        const res = await axios.get(`${CORS_URL}${API_URL}search/?query=${location}`)
        // const {data : {title: city}} = res
        console.log('loading...')

        // search weather from woeid

        const woeid = res.data[0].woeid
        // console.log(woeid)
        
        const response = await axios.get(`${CORS_URL}${API_URL}${woeid}`)

        const data = response.data.consolidated_weather
        setWeatherData(data)
        console.log(weatherData)
        console.log('loading done')
        setLoading(false)
        return data

    }

    const handleSubmit = e => {
        e.preventDefault()
        getWeather(value)
        setValue('')
    }

  return (
      <Context.Provider value={{
          searchOpen, setSearchOpen,
          value, setValue,
          locations, setLocations,
          handleSubmit, getWeather,
          onChange,
          loading,
          error,
          weatherData
      }}>
          {props.children}
      </Context.Provider>
  )
};

export { Context, ContextProvider }
