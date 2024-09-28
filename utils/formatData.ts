import * as data from '../data.json'

type Breed = 'cat_breeds' | 'dog_breeds';

const getBreeds = (name: Breed) => {
  const arr = []
  const breed = data[name];

  for (let key in breed) {
    const obj = breed[key]
    obj.breed = key
    arr.push(obj)
  }

  return arr
}

const getCats = getBreeds('cat_breeds')
const getDogs = getBreeds('dog_breeds')

export { getCats, getDogs }