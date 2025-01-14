import React, { useState } from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaPostagens from '../../components/Postagens/ListaPostagens/ListaPostagens';
import ModalPostagem from '../../components/Postagens/ModalPostagem/ModalPostagem';



function Home() {

  const [mostrarPostagens, setMostrarPostagens] = useState(false);

    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button
                  className='rounded bg-white text-blue-800 py-2 px-4'
                  onClick={() => setMostrarPostagens(!mostrarPostagens)}
                >
                  {mostrarPostagens ? 'Ocultar postagens' : 'Ver postagens'}
                </button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
         {/* Exibe ListaPostagens apenas se mostrarPostagens for true */}
         {mostrarPostagens && <ListaPostagens />}
      </>
    );
}

export default Home;