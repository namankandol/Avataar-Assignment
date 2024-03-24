import React, { useState, useEffect, useRef } from "react"
import { FaAngleDown } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import "../Assets/Navbar.css"

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    "Home",
    "Electronics",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
  ])
  const [moreItems, setMoreItems] = useState([
    "Furniture",
    "Travel",
    "Botanical",
    "Category Name",
  ])
  const [showMore, setShowMore] = useState(true)
  const [showDropdownContent, setShowDropdownContent] = useState(false)
  const [avgElementSize, setAvgElementSize] = useState(0)
  const [space, setSpace] = useState(0)
  const mainMenuRef = useRef(null)
  const moreRef = useRef(null)

  const spaceManager = (mainMenu) => {
    let menuItemsArray = [...mainMenu.children]
    const availableWidth = mainMenu.offsetWidth
    let totalWidth = 0
    menuItemsArray.forEach((item) => {
      totalWidth += item.offsetWidth
    })
    let avgElementSize = totalWidth / menuItemsArray.length
    let tempSpace = (availableWidth - totalWidth) / menuItemsArray.length
    setSpace(tempSpace)
    setAvgElementSize(avgElementSize)
  }

  const menuSetter = () => {
    let tempMenuItems = [...menuItems]
    let tempMoreItems = [...moreItems]
    if (space < 15) {
      tempMoreItems.push(tempMenuItems.pop())
    }
    if (space > avgElementSize) {
      tempMenuItems.push(tempMoreItems.pop())
    }
    setMenuItems(tempMenuItems)
    setMoreItems(tempMoreItems)
    setShowMore(tempMoreItems.length > 0)
  }

  useEffect(() => {
    const handleResize = () => {
      spaceManager(mainMenuRef.current)
      menuSetter()
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [space])

  return (
    <nav id="navbar">
      <div className="logo">E-COMM</div>
      <div className="content">
        <ul id="main-menu" ref={mainMenuRef}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        {showMore && (
          <ul className="dropdown">
            <li
              className="more"
              onClick={() => {
                setShowDropdownContent(!showDropdownContent)
              }}
            >
              MORE
              <FaAngleDown />
            </li>
            {showDropdownContent && (
              <ul className="dropdown-content">
                {moreItems.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        )}
      </div>
      <div className="search-bar">
        <IoSearch />
        <input type="text" placeholder="Search Something" />
      </div>
    </nav>
  )
}

export default Navbar
