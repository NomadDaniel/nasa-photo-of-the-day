import React, {useState, useEffect} from 'react'
import axios from "axios"
import Card from './Card'
import Date from './Date'


const CardBuilder = props => {
    const [data, updateData] = useState([])

    const [dateUrl, setDateUrl] = useState('')

    function handleChange (e) {
        e.preventDefault()
        setDateUrl(e.target.value)
        console.log(dateUrl)
     }

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=0eCAfzcU6VICeD5eWsXoPfhU6HQqG5T44OB21qdD&date=${dateUrl}`)
        .then(res => {
            updateData(res.data)
            console.log(res)
        }).catch(err => console.log(err))
    },[dateUrl])
    console.log(dateUrl)
    return (
        <div>
              <Card date = {data.date} explanation = {data.explanation} title = {data.title} imgUrl = {data.hdurl}  /> 
              {/* <Date dateUrl= {dateUrl}/> */}
              <form>
                <input onChange = {handleChange} type='text'  id='myData' placeholder='Date (YYYY/MM/DD)'/>
                <button >Submit</button>
            </form>

        </div>
    );
};


export default CardBuilder; 