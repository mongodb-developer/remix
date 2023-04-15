import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { mongodb, ObjectId } from "~/utils/db.server";

export async function loader({ params }: LoaderArgs) {
  const movieId = params.movieId;

  let db = await mongodb.db("sample_mflix");
  let collection = await db.collection("movies");
  let movie = await collection.findOne({_id: new ObjectId(movieId)});

  return json(movie);
}

export default function Index() {
  const movie = useLoaderData();
  return (
    <div>
      <h1>Movie: {movie.title}</h1>
      <p>{movie.plot}</p>
    </div>
  )
}