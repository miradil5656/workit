import React from 'react'
import Card from './Card'

const SectionCars = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3  gap-y-10 md:px-[300px]  mb-[100px]">
    <Card num="1"/>
    <Card num="2"/>
    <Card num="3"/>
    <Card num="4"/>
    <Card num="5"/>
    <Card num="6"/>
  </section>
  )
}

export default SectionCars