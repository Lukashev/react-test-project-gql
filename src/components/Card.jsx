import React, { useContext, useCallback, useMemo } from "react"
import AppContext from "../AppContext"

const Card = ({ name, id, children }) => {
  const { activeCards, setActiveCard } = useContext(AppContext)
  const isActive = useMemo(() => activeCards.find((cardId) => cardId === id), [
    activeCards,
    id,
  ])

  const childProps = {
    style: {
      display: isActive ? "block" : "none",
    },
  }

  const parentProps = {
    style: {
      fontWeight: isActive && children ? "bold" : "normal",
    },
  }

  const setActiveCallback = useCallback(
    (id) => {
      const newActiveCards = activeCards.includes(id)
        ? activeCards.filter((cardId) => cardId !== id)
        : activeCards.concat(id)
      setActiveCard(newActiveCards)
    },
    [setActiveCard, activeCards]
  )

  return (
    <>
      <div
        className="card__container"
        onClick={setActiveCallback.bind(null, id)}
        {...parentProps}
      >
        <div>{name}</div>
      </div>
      <div className="card__container_list" {...childProps}>
        {children &&
          children.map((item, index) => {
            const id = `${item.code}${index}${index}`
            return <Card key={id} {...item} id={id} />
          })}
      </div>
    </>
  )
}

export default Card
