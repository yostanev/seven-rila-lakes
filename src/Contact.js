import React from 'react'

const iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378310.98303553363!2d23.03420431867748!3d42.202590926323154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aae16dd4f403f3%3A0x2fcca3080880018f!2z0KHQtdC00LXQvNGC0LUg0YDQuNC70YHQutC4INC10LfQtdGA0LA!5e0!3m2!1sbg!2sbg!4v1642521906526!5m2!1sbg!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export const Contact = () => (
  <center>
  <div>
    <h2>Visit Us</h2>
    <Iframe iframe={iframe} allow="autoplay" />
  </div>
  </center>
)
