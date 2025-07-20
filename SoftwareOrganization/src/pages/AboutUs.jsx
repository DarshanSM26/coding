import React from 'react'
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'
import Image from 'react-bootstrap/Image';
import StaffImage from './../assets/images/staff.jpg'

import FooterContentComponent from '../components/FooterContentComponent'
const AboutUs = () => {
  return (
    <div>
        <TitleComponent title="About Us"></TitleComponent>
        <div className="container-fluid">
          <div className="row justify-content-evenly p-5">
            <div className="col-md-5">
            <div>
              <Image src={StaffImage} thumbnail  />
            </div>
            </div>
            <div className="col-md-5">
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, magnam labore quas aliquid odit natus rerum in esse temporibus molestiae sint eius? Minus obcaecati magni et beatae id corporis rerum. Dolorum impedit, molestias veniam ut iure blanditiis dicta officiis laboriosam dolores. Maiores fugit vero nostrum unde dolores voluptate ipsam necessitatibus commodi, blanditiis, doloribus delectus, deserunt sequi iure ea repellat deleniti. Sit perspiciatis, eos odio doloremque tenetur corporis illo, illum blanditiis, saepe corrupti repellat? Repellat culpa consequatur vitae iste sed ad delectus illum consequuntur optio! Veniam animi incidunt repellat dolorem quaerat. Perferendis cumque facilis beatae voluptas, temporibus eligendi eius repudiandae error expedita quaerat necessitatibus culpa deleniti ratione mollitia incidunt! Illum quaerat natus officia quod magnam incidunt totam eveniet ipsa consequatur eius.
              </p>
              <button type="button" class="btn btn-outline-danger">Explore Now</button>
            </div>
          </div>
        </div>
        <FooterContentComponent></FooterContentComponent>
    </div>
  )
}

export default AboutUs