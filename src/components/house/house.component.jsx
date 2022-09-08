import { useEffect } from "react"
import { useParams } from "react-router-dom"

const House = () => {
  const { house } = useParams()

  useEffect(() => {
    fetch()
  })

  return (
    <div>House</div>
  )
}

export default House