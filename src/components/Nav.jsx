import React from 'react'

const Nav = () => {
  return (
    
    <nav className=" flex justify-center space-x-4 font-sans bg-slate-900 sticky top-0 z-40 ">
  {[
    ['Home', '/dashboard'],
    ['Team', '/team'],
    ['Match', '/match'],
    ['Announcements', '/announcements'],
    ['Projects', '/projects'],
    ['Account', '/login'],
  ].map(([title, url]) => (
    <a href={url} className="  px-3 py-5 fs-3 text-slate-400 font  hover:text-slate-300">{title}</a>
  ))}
</nav>


  )
}

export default Nav