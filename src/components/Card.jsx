import React, { useContext, useCallback, useMemo } from "react"
import AppContext from "../AppContext"

const Card = ({ name, id: _id, children }) => {
  const { activeCards, setActiveCard } = useContext(AppContext)
  const isActive = useMemo(() => activeCards.find((cardId) => cardId === _id), [
    activeCards,
    _id,
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
      const newActiveCards = children
        ? activeCards.includes(id)
          ? activeCards.filter((cardId) => cardId !== id)
          : activeCards.concat(id)
        : activeCards.filter((cardId) => !cardId.includes(_id.substring(0, 2)))
      setActiveCard(newActiveCards)
    },
    [setActiveCard, activeCards, children, _id]
  )

  return (
    <>
      <div
        className="card__container"
        onClick={setActiveCallback.bind(null, _id)}
        {...parentProps}
      >
        <div>{name}</div>
      </div>
      <div className="card__container_list" {...childProps}>
        {children &&
          children.map((item, index) => {
            const id = `${_id}${item.code}${index}`
            return <Card key={id} {...item} id={id} />
          })}
      </div>
    </>
  )
}

export default Card
