import React, { createContext, useState } from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Admin', authenticated: true })
  const [menuItems, setMenuItems] = useState([])

  return (
    <AppContext.Provider value={{ user, setUser, menuItems, setMenuItems }}>
      {children}
    </AppContext.Provider>
  )
}
