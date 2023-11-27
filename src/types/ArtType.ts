export type Art = {
  id: number
  image_id: String
  title: String
  artist_title: String
  description: String
  dimensions: String
  theme_titles: String[]
}

export type ArtList = {
  data: Art[]
}
