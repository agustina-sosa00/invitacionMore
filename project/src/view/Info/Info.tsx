export const Info = () => {
  return (
    <div className="w-full min-h-screen  flex justify-center items-center ">
      <div className=" md:w-1/2  flex flex-col justify-evenly items-center">
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-3xl font-titulo text-violetaOscuro ">
            ¿Cuando es?
          </p>
          <p className="text-2xl font-texto text-violeta">28-09-2024</p>
        </div>
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-3xl font-titulo text-violetaOscuro ">
            ¿A que hora?
          </p>
          <p className="text-2xl font-texto text-violeta">22:00hs</p>
        </div>
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-3xl font-titulo text-violetaOscuro ">
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
        <div className="w-full h-20 flex flex-col justify-evenly items-center ">
          <p className="text-3xl font-titulo text-violetaOscuro ">
            Confirma tu asistencia aquí
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
        <div className="w-full h-20 flex flex-col justify-evenly items-center mt-2 mb-5">
          <p className="text-3xl font-titulo text-violetaOscuro ">
            ¿Como vestir?
          </p>
          <p className=" text-2xl text-violeta  font-texto">Elegante sport</p>
        </div>
      </div>
    </div>
  );
};
