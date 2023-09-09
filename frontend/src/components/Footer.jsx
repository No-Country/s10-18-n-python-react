import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-[80vw] relative bg-blue py-[0.050rem] mt-5 mx-auto dot"></div>
      <footer className="w-full flex p-4 gap-5 justify-center md:justify-evenly items-center shadow-custom">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo de aplicación" className="w-[6rem]" />
          <p>Al servicio de la salud</p>
        </div>
        <div className="flex flex-wrap justify-around md:justify-between items-center gap-3 py-4 md:gap-5">
          <section className="flex gap-4 md:gap-6 justify-between items-center">
            <ul className="flex flex-col gap-4 mb-auto items-start justify-start text-start">
              <li>
                <p className=" font-latoBold font-bold text-black ">NOSOTROS</p>
              </li>
              <li>
                <a className=" font-latoRegular">Galería</a>
              </li>
              <li>
                <a className=" font-latoRegular">Sucursales</a>
              </li>
            </ul>
            <div className="flex flex-col gap-4 mb-auto items-start justify-start">
              <span>
                <p className="font-latoBold font-bold text-black ">SERVICIOS</p>
              </span>
              <span>
                <a className=" font-latoRegular">Profesionales</a>
              </span>
            </div>
            <div className="flex flex-col gap-4 mb-auto items-start justify-start">
              <p className="font-latoBold font-bold text-black ">CONTACTO</p>
              <a className=" text-start font-latoRegular">
                Formulario de Contacto
              </a>
            </div>
          </section>
          <ul className="flex justify-start items-center gap-2">
            <div className="flex gap-2">
              <li className="w-fit">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="38"
                    viewBox="3 0 34 38"
                    fill="none"
                  >
                    <circle
                      cx="18.75"
                      cy="18.75"
                      r="18.75"
                      fill="black"
                      fillOpacity="0.08"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.6667 14.3333V11.8529C20.6667 10.7331 20.924 10.1667 22.7318 10.1667H25V6H21.2151C16.5771 6 15.0469 8.04427 15.0469 11.5534V14.3333H12V18.5H15.0469V31H20.6667V18.5H24.4854L25 14.3333H20.6667Z"
                      fill="#DC4928"
                    />
                  </svg>
                </a>
              </li>
              <li className="w-fit">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="38"
                    viewBox="58 0 34 38"
                    fill="none"
                  >
                    <circle
                      cx="74.25"
                      cy="18.75"
                      r="18.75"
                      fill="black"
                      fillOpacity="0.08"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M82.0605 10H67.0379C66.2174 10 65.5 10.5908 65.5 11.4019V26.4574C65.5 27.2732 66.2174 28 67.0379 28H82.0558C82.8811 28 83.5 27.2686 83.5 26.4574V11.4019C83.5047 10.5908 82.8811 10 82.0605 10ZM71.0796 25.0039H68.5008V16.9862H71.0796V25.0039ZM69.8793 15.7671H69.8605C69.0353 15.7671 68.5008 15.1529 68.5008 14.384C68.5008 13.6009 69.0494 13.0008 69.8933 13.0008C70.7373 13.0008 71.2531 13.5962 71.2718 14.384C71.2718 15.1529 70.7373 15.7671 69.8793 15.7671ZM80.5039 25.0039H77.9251V20.62C77.9251 19.5697 77.55 18.8523 76.6169 18.8523C75.9043 18.8523 75.4823 19.3352 75.2947 19.8041C75.2244 19.9729 75.2056 20.2027 75.2056 20.4371V25.0039H72.6268V16.9862H75.2056V18.1021C75.5807 17.5676 76.1668 16.7986 77.5312 16.7986C79.2239 16.7986 80.5039 17.9146 80.5039 20.3199V25.0039Z"
                      fill="#DC4928"
                    />
                  </svg>
                </a>
              </li>
            </div>
            <div className="flex gap-2">
              <li className="w-fit">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="38"
                    viewBox="113 0 34 38"
                    fill="none"
                  >
                    <circle
                      cx="129.75"
                      cy="18.75"
                      r="18.75"
                      fill="black"
                      fillOpacity="0.08"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M140 12.8958C139.263 13.2167 138.474 13.4333 137.644 13.5333C138.491 13.0333 139.144 12.2417 139.449 11.3C138.656 11.7625 137.779 12.1 136.843 12.2792C136.092 11.4917 135.024 11 133.846 11C131.579 11 129.744 12.8083 129.744 15.0375C129.744 15.3542 129.777 15.6625 129.85 15.9583C126.438 15.7917 123.412 14.1833 121.39 11.7375C121.038 12.3333 120.835 13.0292 120.835 13.7667C120.835 15.1667 121.564 16.4042 122.666 17.1292C121.988 17.1125 121.352 16.9292 120.801 16.625C120.801 16.6417 120.801 16.6583 120.801 16.675C120.801 18.6333 122.217 20.2625 124.094 20.6333C123.751 20.725 123.386 20.775 123.013 20.775C122.751 20.775 122.492 20.75 122.242 20.7C122.763 22.3042 124.281 23.4708 126.078 23.5042C124.675 24.5875 122.903 25.2333 120.979 25.2333C120.648 25.2333 120.322 25.2125 120 25.175C121.81 26.3333 123.967 27 126.281 27C133.838 27 137.966 20.8458 137.966 15.5083C137.966 15.3333 137.961 15.1583 137.953 14.9875C138.754 14.4167 139.449 13.7083 140 12.8958Z"
                      fill="#DC4928"
                    />
                  </svg>
                </a>
              </li>
              <li className="w-fit">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="38"
                    viewBox="169 0 34 38"
                    fill="none"
                  >
                    <circle
                      cx="185.25"
                      cy="18.75"
                      r="18.75"
                      fill="black"
                      fillOpacity="0.08"
                    />
                    <circle cx="185.25" cy="19" r="3.5" fill="#DC4928" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M182.127 15.3381C183.034 14.4315 184.239 13.9268 185.521 13.9268C186.804 13.9268 188.009 14.4341 188.916 15.3407C189.491 15.916 189.902 16.6072 190.125 17.3786H193.729V12.5358C193.729 11.3996 192.85 10.5215 191.714 10.5215H179.371C178.235 10.5215 177.271 11.3996 177.271 12.5358V17.3786H180.917C181.141 16.6072 181.552 15.9133 182.127 15.3381ZM192.357 14.0872C192.357 14.3902 192.112 14.6358 191.809 14.6358H190.163C189.86 14.6358 189.614 14.3902 189.614 14.0872V12.4415C189.614 12.1385 189.86 11.8929 190.163 11.8929H191.809C192.112 11.8929 192.357 12.1385 192.357 12.4415V14.0872Z"
                      fill="#DC4928"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M188.916 22.1262C188.009 23.0328 186.804 23.5268 185.521 23.5268C184.239 23.5268 183.034 23.0355 182.127 22.1289C181.222 21.224 180.723 19.9929 180.722 18.75H177.271V24.8786C177.271 26.0147 178.235 26.9786 179.371 26.9786H191.714C192.85 26.9786 193.729 26.0147 193.729 24.8786V18.75H190.321C190.32 19.9929 189.821 21.2213 188.916 22.1262Z"
                      fill="#DC4928"
                    />
                  </svg>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
