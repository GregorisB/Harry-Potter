import { useEffect } from "react"
import { useParams } from "react-router-dom"

const House = () => {
  const { house } = useParams()

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then((response) => response.json())
    .then(data => console.log(data))
  })

  return (
    <div>House</div>
  )
}

export default House