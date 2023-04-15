import { Link } from "@remix-run/react";

export default function Movie (props: any) {
  return (
    <div key={props._id}>
      <Link to={`/movies/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  )
}