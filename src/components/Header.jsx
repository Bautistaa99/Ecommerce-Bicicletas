import logo from './img/logoSF.png'
import cart from './img/cart.png'
import user from './img/user.png'

export default function Header(){
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
          className='flex [&>li>a]:font-bold [&>li>a]:text-lg [&>li>a]:text-black [&>li>a]:px-16 '
        >
          <li><a>Inicio</a></li>
          <li><a>Tienda</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </nav>
      <div className='flex justify-around pl-24'> 
        <div className='flex'>
          <img src={cart} alt='Carro de compras' 
            className='h-10'
          /><span className='text-black font-bold text-xl'>{cartItems}</span>
        </div>
        <div>
          <img src={user} alt='Usuario' 
            className='h-10'
          />
        </div>
      </div>
    </header>
  )
}