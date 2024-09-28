import { View, Text } from 'react-native'
import React from 'react'
import { getCats } from '@/utils/formatData';
import PetList from '@/components/PetList';

const Cats = () => {
  const cats = getCats;

  return (
    <PetList data={cats} />
  )
}

export default Cats