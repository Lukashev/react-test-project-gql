import React, { useContext, useCallback } from "react"
import AppContext from "../AppContext"

const Card = ({ name, code, children }) => {
  const { activeCards, setActiveCard } = useContext(AppContext)
  const props = {
    style: {
      display: activeCards.find((cardCode) => cardCode === code)
        ? "block"
        : "none",
    },
  }

  const setActiveCallback = useCallback(
    (code) => {
      const newActiveCards = activeCards.includes(code)
        ? activeCards.filter((cardCode) => cardCode !== code)
        : activeCards.concat(code)
      setActiveCard(newActiveCards)
    },
    [setActiveCard, activeCards]
  )

  return (
    <>
      <div
        className="card__container"
        onClick={setActiveCallback.bind(null, code)}
      >
        <div>{name}</div>
      </div>
      <div className="card__container_list" {...props}>
        {children && children.map((item) => <Card key={item.code} {...item} />)}
      </div>
    </>
  )
}

export default Card
