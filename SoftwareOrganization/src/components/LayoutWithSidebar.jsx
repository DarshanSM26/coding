import React from 'react'
import SidebarComponent from './SidebarComponent'

const LayoutWithSidebar = ({ children }) => {
  return (
    <div className="d-flex">
      <SidebarComponent />
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  )
}

export default LayoutWithSidebar