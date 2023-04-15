import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { mongodb } from "~/utils/db.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const movie = {
    title: formData.get("title"),
    year: formData.get("year")
  }
  const db = await mongodb.db("sample_mflix");
  const collection = await db.collection("movies");
  const result = await collection.insertOne(movie);
  return redirect(`/movies/${result.insertedId}`);
}

export default function Index() {
  return (
    <div>
      <h2>Add a movie</h2>
      <Form method="POST" action="/movies/add">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="year" placeholder="Year" />
        <button type="submit">
          Search
        </button>
      </Form>
    </div>
  )
}