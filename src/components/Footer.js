import React from 'react'

function Footer () {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <p>&copy; Copyright Emeka Bruno {year}</p>
    </footer>
  );
}

export default Footer