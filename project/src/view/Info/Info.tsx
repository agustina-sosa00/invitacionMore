export const Info = () => {
  return (
    <div className="w-full md:w-1/2 min-h-screen  flex justify-center items-center ">
      <div className=" w-full flex flex-col md:flex-row md:flex-wrap  justify-evenly items-center">
        <div className="w-full md:w-1/2 h-20 md:h-30 md:mb-10 flex flex-col justify-evenly items-center">
          <p className="text-3xl lg:text-4xl font-titulo text-violetaOscuro ">
            ¿Cuando es?
          </p>
          <p className="text-2xl md:text-3xl font-texto text-violeta">
            28-09-2024
          </p>
        </div>
        <div className="w-full md:w-1/2 h-20 md:h-30 md:mb-10 flex flex-col justify-evenly items-center">
          <p className="text-3xl lg:text-4xl font-titulo text-violetaOscuro ">
            ¿A que hora?
          </p>
          <p className="text-2xl md:text-3xl font-texto text-violeta">
            21:00hs
          </p>
        </div>
        <div className="w-full md:w-1/2 h-20 md:h-36  md:mb-10 flex flex-col justify-evenly items-center">
          <p className="text-3xl lg:text-4xl font-titulo text-violetaOscuro ">
            ¿Donde queda?
          </p>
          <button className="button ShadowEffect2 font-texto">
            <a
              href="https://maps.app.goo.gl/KaLiDnC2aCaKRESR6"
              className="button-content"
            >
              Mapa{" "}
            </a>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-20 md:h-36 md:mb-10 flex flex-col justify-evenly items-center ">
          <p className="text-3xl lg:text-4xl font-titulo text-violetaOscuro text-center">
            ¿Asistiras?
          </p>
          <button className="button ShadowEffect2 font-texto">
            <a
              href="https://wa.me/541160285800?text=asistiré%20a%20tu%20fiesta%20de%15
"
              className="button-content font-texto"
            >
              Confirmar
            </a>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-20 md:h-30 md:mb-10 flex flex-col justify-evenly items-center mt-2 mb-5">
          <p className="text-3xl lg:text-4xl font-titulo text-violetaOscuro ">
            ¿Como vestir?
          </p>
          <p className=" text-2xl md:text-2xl lg:text-3xl text-violeta  font-texto">
            Casual
          </p>
        </div>
      </div>
    </div>
  );
};
