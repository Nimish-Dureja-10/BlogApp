import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h2>
            Not Found
        </h2>
        <p>The Page You Are Looking For Doesn't Exists</p>
        <Link href={'/'}>Return Home</Link>
    </div>
  )
}

export default NotFound