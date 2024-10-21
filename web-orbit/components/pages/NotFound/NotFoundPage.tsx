import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="not-found-container">
        <h1>
          404<span aria-hidden="true">404</span>
        </h1>
        <div className="cloak__wrapper">
          <div className="cloak__container">
            <div className="cloak"></div>
          </div>
        </div>
        <div className="info">
          <p>  We're fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on its behalf.
          </p>
          <Link
            className="follow"
            href="/"
            rel="noreferrer noopener"
          >Go Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
