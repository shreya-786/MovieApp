import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const ExplorePage = () => {
  const params = useParams()
  console.log("params",params.explore);

  const fetchData = async()=>{
    try {
      const response = await axios.get(`/discover/${params.explore}`)
    } catch (error) {
      
    }
  }
  
  return (
    <div>
      Explore Page
    </div>
  )
}

export default ExplorePage
