import axios from 'axios'
import { useEffect, useState } from 'react'
import MagazineCard from './MagazineCard'
import { useNavigate } from 'react-router-dom'

const NewMagazine = () => {
  const navigate = useNavigate()
  const [result, setResult] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newMagazines = await axios.get(
          'http://localhost:3000/api/newMagazines'
        )

        setResult(newMagazines.data)
      } catch (error) {
        alert(error.message)
      }
    }

    fetchData()
  }, [])
  return (
    result && (
      <div className="grid grid-cols-5 m-auto min-w-[80vw]">
        {result.map((element) => {
          return (
            <MagazineCard
              key={element._id}
              magazine={element}
              result={result}
              setResult={setResult}
            />
          )
        })}
      </div>
    )
  )
}

export default NewMagazine
