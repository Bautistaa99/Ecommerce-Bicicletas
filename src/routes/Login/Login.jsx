export default function Login(){
  return(
  <>
    <div className="min-h-screen flex flex-col justify-center sm:py-12 mt-10">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h2 className="font-bold text-center text-2xl mb-5">Iniciar Sesion</h2>  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-black pb-1 block">Correo Electronico</label>
            <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label className="font-semibold text-sm text-black pb-1 block">Contraseña</label>
            <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button type="button" className="group transition duration-200  hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2 group-hover:text-white group-focus:text-white">Ingresar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block group-hover:text-white group-focus:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
          </div>
          <div className="p-5">
              <div className="grid grid-cols-3 gap-1">
                  <button type="button" className="transition duration-200 border border-gray-200 text-blakc w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Facebook</button>
                  <button type="button" className="transition duration-200 border border-gray-200 text-blakc w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
                  <button type="button" className="transition duration-200 border border-gray-200 text-blakc w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
              </div>
          </div>
            <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-blakc hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <span className="inline-block ml-1">Olvide mi contraseña</span>
                </button>
              </div>         
            </div>
          </div>
        </div> 
      </div>
    </div>
  </>
  )
}