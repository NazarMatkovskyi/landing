import React from 'react'
import './style.scss'
import team from '../../assets/images/Team.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_inner"
           style={{ backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/b6b3/c508/02f73a70c75b546317b6472adea977a3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdgBxvs-pR4yj~o0HElqqsyA9sk0EuTsi4SmnCxJsseBtJuvnx0aZ0~McBcUDpFekHnBzh~C2E5-cJrg0SxizLaaw4qIKG2ELaNwgzQa79bntVzutaOsPAmOyiJgYVTHkhTGjiYpQb5lS8qBD9S7EjrsFzCkYntW-8yJijhEfDuIzU-9USi8DFEWh71usIi9GB8vVMzicn-Mooh9sTWUByRFEJYVW90eYAc0qJeJ7ra0xsPt3BnutsGlH9KVLPAJsA0ggnLt-A5BOBn5MC7Z8To1SSwGo99iQ8~NSFYhSBfXqp4htMbh~h8qNRywmqeoZsDnyvWva17oxumuhZbKCg__")' }}>
        <div className={'footer_inner_left'}>
          <img src={team} alt={'team'}/>
        </div>
        <div className={'footer_inner_rigth'}>
          <h3>Empire State Building</h3>
          <p>350 5th Ave, New York, NY 10118</p>
          <a href="tel:+1212-736-3100">+1 212-736-3100</a>
          <a href="mailto: contacts@esbnyc.com">contacts@esbnyc.com</a>
        </div>
      </div>
      <div className="footer_end">
        © Company 2024. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
