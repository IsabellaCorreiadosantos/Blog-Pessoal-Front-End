import React,  { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import homeLogo from '../../assets/gamer.svg';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  const { nome, setNome } = useContext(UserContext);
    return (
        <>
        <div className="bg-[#cc1111] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem-vinde:</h2>
              <h2 className='text-3xl font-bold' > {nome}</h2>
              <Link to="/login" className='rounded bg-[#F5DABF] text-[#FF8100] py-2 px-4'>
          Voltar 
        </Link>
            </div>
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home; 