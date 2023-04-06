import React from 'react';
import   img from "../assets/img/football-svgrepo-com.svg";

const Nav = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap  p-6 bg-slate-900 sticky top-0 z-40">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img src={img}  width="34" height="34" alt="" />
      
    <span class="font-semibold text-xl tracking-tight">Kain FC</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
    <div class="text-sm lg:flex-grow">
    {[
    ['Home', '/'],
    ['Team', '/team'],
    ['Match', '/match'],
    ['Announcements', '/announcements'],
    ['Projects', '/projects'],
  ].map(([title, url]) => (
    <a href={url} className="mx-3 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">{title}</a>
  ))}
      
    </div>
    <div>
    <a href='/login' className="mx-3 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">Account</a>
     
    </div>
  </div>
</nav>

  )
}

export default Nav