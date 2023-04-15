import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import type { Movie } from "~/utils/types.server";
import MovieComponent from "~/components/movie";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);

  let db = await mongodb.db("sample_mflix");
  let collection = await db.collection("movies");
  let movies = await collection.find({}).limit(10).toArray();

  let searchedMovies: Movie[] = [];
  let searchTerm = url.searchParams.get("search");
  if (searchTerm) {
    let searchRegex = new RegExp(searchTerm, "i");
    searchedMovies = (await collection.find({title: {$regex: searchRegex}}).limit(10).toArray()) as Movie[];
  }

  return json({movies, searchedMovies});
}

export default function Movies() {
  let {movies, searchedMovies} = useLoaderData();
  return (
    <div>
      <h1>Movies</h1>
      <h2>Fetch ten movies</h2>
      <p className="mb-2">Here are some movies from `sample_mflix.movies`</p>
      {movies.map((movie: Movie) => {
        return (
          <MovieComponent key={movie._id} {...movie} />
        )
      })}

      <hr />
      <h2>Search for a movie</h2>
      <Form>
        <input type="text" name="search" placeholder="Partial title" />
        <button type="submit">
          Search
        </button>
      </Form>
      {!!searchedMovies.length && searchedMovies.map((movie: Movie) => {
          return (
            <MovieComponent key={movie._id} {...movie} />
          )
        })
      }

    </div>
  )
}