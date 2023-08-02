import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Context} from "../context/contextapi"
import fetchData from '../utils/api'
import LeftNav from "../components/LeftNav"
import SearchResultsVideoCard from './SearchResultsVideoCard'

const SearchResults = () => {

  const [result,setResult]=useState([])
  const {searchQuery}=useParams()
  const {setLoading}=useContext(Context)


  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults()
  },[searchQuery])

  const fetchSearchResults=()=>{
    setLoading(true)
    fetchData(`search/?q=${searchQuery}`).then(({contents})=>{
      console.log(contents)
      setResult(contents)
      setLoading(false)
    })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          {
            result?.map((item)=>{
              if(item?.type!=='video') return false
              return (
                <SearchResultsVideoCard key={item?.video?.videoId} video={item?.video}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResults
