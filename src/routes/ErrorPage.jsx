import { useRouteError } from "react-router-dom"


const ErrorPage = () => {

const error = useRouteError();
    return (
    <div>
      <h1>Deu ruim!</h1>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>

    </div>
  )
}

export default ErrorPage
