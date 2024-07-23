export const Info = () => {
  return (
    <div className="w-full  info flex justify-center items-center ">
      <div className=" md:w-1/2  flex flex-col justify-evenly items-center">
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-xl font-semibold ">¿Cuando es?</p>
          <p className="text-2xl font-bold text-violet-800">28-09-2024</p>
        </div>
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-xl font-semibold">¿A que hora?</p>
          <p className="text-2xl font-bold text-violet-800">22:00hs</p>
        </div>
        <div className="w-full h-32 flex flex-col justify-evenly items-center">
          <p className="text-xl font-semibold ">¿Donde queda?</p>
          <button className="button ShadowEffect2">
            <a
              href="https://maps.app.goo.gl/KaLiDnC2aCaKRESR6"
              className="button-content"
            >
              Mapa{" "}
            </a>
          </button>
        </div>
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-xl font-semibold">Confirma tu asistencia aquí</p>
          <button className="button ShadowEffect2">
            <a
              href="https://wa.me/541160285800?text=asistiré%20a%20tu%20fiesta%20de%15
"
              className="button-content"
            >
              Confirmar
            </a>
          </button>
        </div>
        <div className="w-full h-20 flex flex-col justify-evenly items-center">
          <p className="text-lg font-semibold">¿Como vestir?</p>
          <p className="font-bold text-2xl text-violet-800 ShadowEffect2">
            Elegante sport
          </p>
        </div>
      </div>
    </div>
  );
};
