import React from 'react'
import GymHerobanner from './gymherobanner'
import GymDetails from './gymdetails'
import GymOther from './gymother'
import BlogDetails from '../../blog/blogdetails'

export default function Gym() {
  return (
    <>
        <GymHerobanner/>
        <GymDetails/>
        <GymOther/> 
        <BlogDetails/>
    </>
  )
}
