import { Link, NavLink, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
 
  

  return (
    <>
    
     <div className='w-full bg-[#cc1111] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

            <div className='flex gap-4'>
            <NavLink to='/home' className='active'>Home</NavLink>
              <NavLink to='/login' >Login</NavLink>
              <NavLink to ='/postagens'>Postagens</NavLink>
              <NavLink to='/temas' >Temas</NavLink>
              <NavLink to='/cadastrarTemas' >Cadastrar tema</NavLink>
              <NavLink to='/perfil'>Perfil</NavLink>
              <NavLink to='/sair'>Sair</NavLink>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Navbar; 