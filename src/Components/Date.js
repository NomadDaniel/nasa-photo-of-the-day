import React, {useState} from 'react';
// import moment from 'moment';

const Date = (props) => {

 const [dateUrl, setDateUrl] = useState(props.dateUrl)

  function handleChange (e) {
    e.preventDefault()
    setDateUrl(e.target.value)
    console.log(dateUrl)
  }

  // const handleSubmit = e =>{
  //   e.preventDefault();
  //   props.date = date;
  // }

    return (
        <div>
            <form>
                <input onChange = {handleChange} type='text'  id='myData' placeholder='Date (YYYY/MM/DD)'/>
                <button >Submit</button>

           </form>
        </div>
    );
};

export default Date;