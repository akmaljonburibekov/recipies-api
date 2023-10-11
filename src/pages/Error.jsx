import { Link, useRouteError } from "react-router-dom"
function Error() {
  const error = useRouteError();
  return <main className="h-screen grid place-content-center text-center">
    <h1 className="text-9xl mb-5">404</h1>
    <p className="mb-8 text-5xl">Page Not Found</p>
    <Link className="btn btn-primary" to="/">Go to Home</Link>
  </main>
}

export default Error