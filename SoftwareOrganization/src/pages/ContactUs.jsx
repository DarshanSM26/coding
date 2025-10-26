import React from 'react'
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'
import FooterContentComponent from '../components/FooterContentComponent'
import LayoutWithSidebar from '../components/LayoutWithSidebar'
const ContactUs = () => {
  return (
    <LayoutWithSidebar>
      <div>
        <TitleComponent title="Contact Page"></TitleComponent>
        <ContentComponent></ContentComponent>
        <FooterContentComponent></FooterContentComponent>
      </div>
    </LayoutWithSidebar>
  )
}

export default ContactUs