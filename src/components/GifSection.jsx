import gif from './img/gif2.mp4'
export default function GifSection(){
  return(
  <section className="landing-section bg-black h-screen w-screen text-center overflow-hidden relative">
    <header>
      <h2>Disfrute de nuestros mas novedosos modelos</h2>
      <p>No dude en contactarnos!</p>
    </header>
    <div className='absolute top-0 bottom-0 h-full w-full z-10'>
      <video
        src={gif}
        autoPlay
        muted
        loop
        loading="lazy"
        className='object-center object-cover h-full w-full'
      />
    </div>
  </section>
  )

}