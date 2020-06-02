import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import "./App.scss"
import Card from "./components/Card"
import AppContext from "./AppContext"

const dataQuery = gql`
  {
    continents(filter: {}) {
      code
      name
      children: countries {
        code
        name
        children: languages {
          code
          name
        }
      }
    }
  }
`

function App() {
  const [activeCards, setActiveCard] = useState([])
  const { loading, error, data = {} } = useQuery(dataQuery)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <AppContext.Provider value={{ activeCards, setActiveCard }}>
      <div className="App">
        {data.continents.map((item) => (
          <Card key={item.code} {...item} />
        ))}
      </div>
    </AppContext.Provider>
  )
}

export default App
