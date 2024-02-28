import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,  useState } from 'react';
import { getData } from './redux/Weather';

function App() {
  const [inputValue, setInputValue] = useState();
  const [data, setData] = useState([]);
  const weather = useSelector(state => state);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getData(inputValue))
  }, [])
  
  console.log(16, weather.weather);
  const handleChange = (e) => {   
    setInputValue(e.target.value);
  };
  
  function handleSubmit(e) {
    // const user = {
    //   name: weather.weather.weather.name,
    //   status: weather.weather.status,
    //   country: weather.weather.weather.sys.country,
    //   gradus: weather.weather.weather.main.temp,
    //   namlik: weather.weather.weather.main.humidity,
    //   havo: weather.weather.weather.main.pressure,
    //   shamol: weather.weather.weather.wind.speed
    // }
    e.preventDefault()
    // setData(user)
    console.log(19, inputValue);
    console.log(15, data);
  }


  // setData(weather.weather.weather.curren.value)
  // console.log(26, data);
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="wrapper">
        <input value={inputValue} onChange={handleChange} placeholder="Joy nomini kiriting...." className="name" type="text" />
      { weather.weather.status == "succes" && <>
      <h1>{weather.weather.weather.name},{weather.weather.weather.sys.country}</h1>
        <div className="weather">
         <h3>Gradus      <span>{weather.weather.weather.main.temp}°C</span></h3>
        <h3>Namlik      <span>{weather.weather.weather.main.humidity}%</span></h3>
        <h3>Havo bosimi     <span>{weather.weather.weather.main.pressure}hPa</span></h3>
        <h3>Shamol      <span>{weather.weather.weather.wind.speed}mph</span></h3> 
        </div>
        </>
    }
    <button className="btn">Qidirish</button>
    </form>
    </div>
  )
}

export default App
