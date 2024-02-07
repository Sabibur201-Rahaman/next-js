import Link from 'next/link'
import React from 'react'

function Menu() {
  return (
    <div>
      <h1>Welcome to the MenuPage</h1>
      <Link href={'/'}>Home</Link><br/>
      <Link href={'/product'}>product</Link><br/>
      <Link href={'/profile'}>profile</Link><br/>
    </div>
  )
}

export default Menu
