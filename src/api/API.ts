import axios from 'axios'
import { type ArtList } from '@/types/ArtType'

export const API_URL =
  'https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_title,description,dimensions,theme_titles'

export const fetchImage = (image_id: String) => {
  const IMAGE_URL = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
  return IMAGE_URL
}

export const getData = async () => {
  try {
    const res = await axios.get<ArtList>(API_URL)
    const result = res.data
    return result
  } catch (error) {
    console.log(error)
  }
}
