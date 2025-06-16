import Catering from '@/Compunents/CATERING/Catering'
import Package from '@/Compunents/CATERING/Package'
import Party from '@/Compunents/CATERING/Party'
import Wedding_pkg from '@/Compunents/CATERING/Wedding_pkg'
import Priya from '@/Compunents/Menu/Priya'
import React from 'react'

const page = () => {
  return (
    <>
      <Catering />
      <Package />
      <Wedding_pkg />
      <Party />
      <Priya />
    </>
  )
}

export default page
