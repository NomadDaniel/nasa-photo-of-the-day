import React, { useState, useEffect } from 'react'
import axios from "axios"
import Card from './Card'



const CardBuilder = props => {
    const [data, setData] = useState([])

    const [dateUrl, setDateUrl] = useState('')
    const [form, setForm] = useState('') 

    const handleChange = e => {
        setForm(e.target.value)
        console.log(dateUrl)
     }

     const handleSubmit = e => {
         e.preventDefault()
        setDateUrl(form)
     }

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=0eCAfzcU6VICeD5eWsXoPfhU6HQqG5T44OB21qdD&date=${ dateUrl }`)
        .then(res => {
            setData(res.data)
            console.log(res)
        }).catch(err => console.log(err))
    }, [dateUrl])
    
    return (
        <div>
              <Card date = {data.date} explanation = {data.explanation} title = {data.title} imgUrl = {data.hdurl}  /> 
              
              <form onSubmit = { handleSubmit }>
                <input name = "dateInput" value = { form } onChange = { handleChange } type = 'text' id = 'myData' placeholder = 'Date (YYYY-MM-DD)'/>
                <button> Submit </button>
            </form>

        </div>
    )
}


export default CardBuilder