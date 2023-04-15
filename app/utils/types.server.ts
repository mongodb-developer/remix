import type { WithId, Document } from "mongodb";

export interface Movie extends WithId<Document> {
  plot: string,
  genres: string[],
  runtime: number,
  rated: string,
  cast: string[],
  title: string,
  fullplot: string,
  languages: string[],
  released: string,
  directors: string[],
  writers: string[],
  awards: {
    wins: number,
    nominations: number,
    text: string,
  },
  lastupdated: string,
  year: number,
  imdb: {
    rating: number,
    votes: number,
    id: number,
  },
  countries: string[],
  type: string,
  tomatoes: {
    viewer: {
      rating: number,
      numReviews: number,
      meter: number,
    },
    dvd: string,
    lastUpdated: string,
  }
}