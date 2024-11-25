import React from 'react'
import SpaHeroBanner from './spaherobanner'
import SpaDetails from './spandetails'
import SpaTreatment from './spatreatment'
import BlogDetails from '../../blog/blogdetails'

export default function Spa() {
  return (
    <>
        <SpaHeroBanner />
        <SpaDetails/>
        <SpaTreatment/>
        <BlogDetails/>
    </>
  )
}
