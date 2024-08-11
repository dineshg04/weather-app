import React, { useState } from 'react'
import axios from 'axios'



const App = () => {
  const [data,setdata] = useState({});
  const [location, setlocation] = useState('');
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8682eeffad4482af6d59b0e0d95bcd59`; 
  
  const searchlocation = (event)=>{
    if(event.key === 'Enter'){
      axios.get(apiurl).then(response => {setdata(response.data)
         console.log(response.data)}).catch(error =>console.error("city is not found",error))
      setlocation('')
    }
   
  }

  return (
    <main className='bg-[url(https://png.pngtree.com/background/20230426/original/pngtree-beautiful-sunset-with-clouds-that-are-seen-above-the-earth-picture-image_2482336.jpg)] w-screen h-screen bg-cover '>
      <div className=''>
        <div className='flex justify-center  '>
          <input value={location} type='text' 
          placeholder='Location' 
          onChange={event => setlocation(event.target.value) }
          onKeyDown={searchlocation} 
          className='rounded-lg px-3 py-2 my-4 bg-white/10'/>
        </div>
        <div className='text-3xl font-extrabold text-white ml-10 my-8 font-mono'>
          <p>{data.name}</p>
        </div>
        <div className=''>
         {data.main ? <p className='text-5xl font-extrabold text-white ml-10 mb-11'>{data.main.temp}&deg;F</p> : null } 
        </div>
        <div className='text-xl font-semibold text-white ml-10 mb-28'>
        {data.weather ? <p className='font-mono'>{data.weather[0].main}</p> : null } 
        {
          data.name != undefined &&
          <div className='flex justify-center'>
          <div className='flex justify-evenly items-center   font-semibold text-white backdrop-blur-[1px] bg-white/15 rounded-lg w-[500px] h-[100px]'>
            <div className=''>
            {data.main ? <p className='text-xl'>{data.main.feels_like}&deg;F</p> : null }
            <p className='text-lg font-light font-mono'>Feels like</p>
            </div>
            <div>
            {data.main ? <p className='text-xl'>{data.main.humidity}%</p>:null}
            <p className='text-lg font-mono font-light'>Humidity</p>
            </div>
            <div>
            {data.wind ? <p className='text-xl'>{data.wind.speed}mph</p>:null}
            <p className='text-lg font-mono font-light'>Wind Speed</p>
            </div>
            
          </div>
        

        </div>
        }
        </div>
        
      
      </div>
    </main>
  )
}

export default App