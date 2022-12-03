import React,{useState} from 'react'
import './App.css';
import axios from 'axios'



function App() {

  const [movie,setMovie]=useState([])
   const fetchMovie=()=>{
    axios.get('https://www.omdbapi.com/?s=kabhi&apikey=7fbf596f').then((response)=>{
      console.log(response);
      setMovie(response.data.Search)
    })

   }
  return (
    <div className="App">
      <button onClick={fetchMovie}>fetch movie</button>
      {
        movie.map((value,index)=>{
          return(
            <h2>{value.Title}</h2>
          )

        })
      }
    </div>
  );
}

export default App;
