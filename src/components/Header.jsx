
import logo from './img/logoSF.png'
import cart from './img/cart.png'
import user from './img/user.png'
import { Link } from 'react-router-dom'
import {useId} from 'react'



export default function Header(){
  const menuLinkId= useId()
  const cartItems = 0
  return(
    <header 
      className='py-3 px-10 flex items-center fixed top-0 w-full 
      justify-between z-40 text-white [&>div]:w-1/3 '
    >
      <div className='flex justify-center'>
        <img src={logo} alt='Bicilandia AR' 
          className='h-28'
        />
      </div>
      <nav>
        <ul 
          className='flex '
        >
        
          {[
            ['Inicio','/'],
            ['Tienda','/Tienda'],
            ['Contacto','/Contacto'],
          ].map(([title,url])=>(
            <li key={menuLinkId}><Link to={url} className='px-16 text-lg text-black font-bold'>{title}</Link></li>
          ))}
        </ul>
      </nav>
      <div className='flex justify-around pl-24 lg:m-10 ' > 
        <div className='flex'>
          <img src={cart} alt='Carro de compras' 
            className='h-10'
          /><span className='text-black font-bold text-xl'>{cartItems}</span>
        </div>
        <div>
        <Link to='/Login'>
          <img src={user} alt='Usuario' 
            className='h-10'
          />
        </Link>
        </div>
      </div>
    </header>
  )
}