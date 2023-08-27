import Bicicletas from './img/bicicleta.jpg'
import Accesorios from './img/accesorios.jpg'
import Indumentaria from './img/indumentaria2.jpg'
import Comestibles from './img/comestibles.jpg'



export default function Shop(){
  return(
    <section className="w-screen py-20">
      <h2 className="flex justify-center text-3xl font-bold">Tienda</h2>
      <div 
        className="grid grid-cols-4 gap-36  m-20 [&>div]:border-4 [&>div]:rounded-xl [&>div]:p-5 [&>div]:flex [&>div]:items-center [&>div]:flex-col [&>div]:bg-slate-50
        [&>div>img]:h-72 [&>div>img]:w-72 
        [&>div>h4]:text-xl [&>div>h4]:font-semibold  [&>div>h4]:pb-4" 
      >
        <div>
          <h4>Bicicletas</h4>
          <img src={Bicicletas} alt='Seccion de biciletas de ruta, mountain bike o de montaña, bicicleta de gravel, bicicleta urbana, bicicleta electricas, bicicletas infantiles' 
          />
        </div>
        <div>
          <h4>Accesorios</h4>
          <img src={Accesorios} alt='Los mejores accesorios para tu bicicleta, por ejemplo, cascos, asientos, pedales' 
          />
        </div>
        <div>
          <h4>Indumentaria</h4> 
          <img src={Indumentaria} alt='Seccion de biciletas' 
          />
        </div>
        <div>
          <h4>Comestibles</h4> 
          <img src={Comestibles} 
            alt='Nuestra seccion de comestibles, entre ellos barras energeticas, geles energizantes con y sin cafeina'
          />
        </div>
      </div>
    </section>
  )
}