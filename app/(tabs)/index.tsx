import { View, Text } from 'react-native'
import React from 'react'
import { getDogs } from '@/utils/formatData'
import PetList from '@/components/PetList';

const Dogs = () => {
  const dogs = getDogs;
  
  return (
    <PetList data={dogs} />
  )
}

export default Dogs