import React from 'react'
import { useEffect,useState } from 'react'

function Searchfilter() {
    const [data,setData]=useState([]);
   const [searchApiData,setSearchApiData]=useState([])
    const [filterVal,setFilterVal]=useState('')

    useEffect(()=>{
        const fetchData=()=>{

            fetch('https://jsonplaceholder.typicode.com/users')
            // fetch("https://www.omdbapi.com/?s=hit&apikey=7fbf596f")
             .then(response => response.json())
              .then(json => {
                console.log(json)
                setData(json)
                setSearchApiData(json)

              })
        }
        fetchData();
    },[])
    const handleFilter=(e)=>{
      if(e.target.value===''){
        setData(searchApiData)
      }else{
        const filterResult=searchApiData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()))
        if(filterResult.length>0){
          setData(filterResult)

        }
        else{
          setData([{"Title":"no data"}])
          //name
        }
        
      }
      setFilterVal(e.target.value)

    }
  return (
    <div style={{margin:'30px 30%'}}>
      <div style={{marginBottom: '20px'}}>
      <input type='search'  placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}/>
      </div>
        <table>
            <th>Movie Name</th>
            <th>Actor Name</th>
            <th>Rating</th>
            {
              data.map((item)=>{
                return(
                  <tr>
                    
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.address.zipcode}</td>
                  </tr>
                  // <h3>{item.Title}</h3>
                )
              })
            }

        </table>
    </div>
  )
}

export default Searchfilter;