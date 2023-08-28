import Logo from '/src/components/img/LogoSF.png'
import { Link } from 'react-router-dom'
export default function NotFound(){
  return(
    <>
    <div className='flex justify-center items-center mt-20'>
      <img 
        src={Logo} 
        alt='Logo de BiciLandia' 
        className='h-28'
      />
      <div className='font-bold'>
        <h3 className=' text-red-600'>Lo sentimos, Ha llegado a una pagina que no existe!</h3><span className='underline'><Link to='/'>Haga Click aqui para volver al inicio</Link></span>

      </div>
    </div>
    </>
  )
}