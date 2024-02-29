import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef,  useState } from 'react';
import { getData } from './redux/Weather';

function App() {
  const [inputValue, setInputValue] = useState();
  const nameRef = useRef('')
  const weather = useSelector(state => state);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getData(inputValue || "fergana"));
    setInputValue(nameRef.current.value)
  },[nameRef.current.value, nameRef, inputValue]);
  
  // console.log(18, weather.weather);
  // console.log(19, inputValue);
  // const handleChange = (e) => {   
  //   setInputValue(e.target.value);
  // };
  
  function handleSubmit(e) {
    e.preventDefault()
    setInputValue(nameRef.current.value)
    // console.log(23, nameRef.current.value);

  }


  // setData(weather.weather.weather.curren.value)
  // console.log(26, data);
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="wrapper">
        <input
        //  value={inputValue} onChange={handleChange}
        ref={nameRef}
          placeholder="Joy nomini kiriting...." className="name" type="text" />
      { weather.weather.status == "success" &&  <>
      <h1>{weather.weather.weather.name},{weather.weather.weather.sys.country}</h1>
        <div className="weather">
         <h3>Gradus      <span>{weather.weather.weather.main.temp}°C</span></h3>
        <h3>Namlik      <span>{weather.weather.weather.main.humidity}%</span></h3>
        <h3>Havo bosimi     <span>{weather.weather.weather.main.pressure}hPa</span></h3>
        <h3>Shamol      <span>{weather.weather.weather.wind.speed}mph</span></h3> 
        </div></>
    }
    <button className="btn">Qidirish</button>
    </form>
    </div>
    
  )
}

export default App
