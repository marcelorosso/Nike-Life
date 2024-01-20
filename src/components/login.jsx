import { IconButton } from '@mui/material'
import React from 'react'
import Swal from "sweetalert2"

// Login pop-up
const loginSweet = () => {
  Swal.fire ({
    title: "Sign In Here",
    color: "green",
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
        title: "family"
    },
    html: `<div class="modal-body">
    <div class="buttons_modal">
      <button class="btn_facebook"><a href="https://www.facebook.com/">Login with Facebook</a></button>
      <button class="btn_google"><a href="https://mail.google.com/">Login with Google</a></button>
      <button class="btn_email" id="btn_email"><a href="">Login with your Nike-Life Account<a></button>
    </div>
    <div class="link_form_registro">
      <p>Don't have your account yet? <a href="">Sign Up here</a></p>
    </div>
    </div>`
  }) 
}

const Login = () => {
  return (
    <IconButton onClick={() => loginSweet()}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAABy0lEQVRIie2VQUtUURTHf+e+h6O4r0mJUmeidfaE9i2UIFq0bBMRvgiqTVEtcipIMIgkBP0Igdualm1c6Ix+AE3HiKSB3BTU6Dj3tDDhPRnve7xaif/duefc87vncDgXDoskbWAwVctjmsNW5LhRrRvfL8/f7K//H4iqBDOfHio8ATojnoZCaXG0MIGIulJ4SYzgxLVHCi8Af5/LF7jYU938tfHuzZwrh7OSYKqWV2+nRryC/frteV6fq3XGBcFrjiQAALp2rB12BTghFnoTALtSezIzRERsGkZSnBuispoGorCSGWK2tQxsJjC+d/qtD5kh83eKPwS5DRzUDgvcmrtx9mdmCEAlLLwVuILwOXquyLqKXq6GxdmkHKnXCiU1Q/m1c9baHmPMxsK3/iVK6Qbj8MjZrsGZlQGUqwZy3Tl/4uP1vsae78KrL13N7sYDVRoIs4ujxQPHvS1kaHr1fAs7JnApElNXpGzQOqp5REYUjv31WYX3HubpQjhQdUN21/q4wn1STF4btUR5WQkLj6PrPwYJppfvKvI6Q/KYBL1XCc9M7tmx1ypy+l8BACpyKmrHPqIt2/EsZ7aRtNu3HQC+brU6nme9fyT+AMDKk6sd9UpNAAAAAElFTkSuQmCC" alt="loginIcon"/>
    </IconButton>
  )
}

export default Login
