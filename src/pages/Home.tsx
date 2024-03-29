import {
  Navbar,
  Form as ContactLink,
  IdemPromoVideo as IdemVideo
} from "../components";

import Background from "../assets/Background.jpg";
import testGroupQRCode from "../assets/testGroupQRCode.png";

const Home = () => {
  return (
    <>
      <div
        className="fixed bg-cover	bg-black w-full h-full bg-gradient-to-b from-black to-black brightness-[0.2]
	"
        style={{ backgroundImage: `url(${Background})` }}
      />
      <div className=" relative justify-center min-w-500">
        <Navbar />

        <div className="flex flex-wrap justify-center mt-20 items-end mb-10">
          <div className="flex font-bold text-white text-5xl items-end">
            The
          </div>
          <div className="flex font-bold text-[#ffd000] text-5xl ml-2 items-end">
            Faster
          </div>
          <div className="flex font-bold text-white text-5xl items-end">,</div>
          <div className="flex font-bold text-[#ffd000] text-5xl ml-2 items-end">
            Easier
          </div>
          <div className="flex text-white text-3xl ml-2 items-end">
            (And Economical) Way To Do
          </div>
          <div className="flex text-[#ffd000] text-5xl ml-2 font-bold items-end">
            KYC
          </div>
          <div className="flex text-white text-3xl ml-2 items-end">
            Compliance
          </div>
        </div>
        <div className="flex-row  text-center text-5xl mt-30">
          <div className="flex text-white text-xl mb-10 justify-center">
            Minimise the hassle of KYC compliance for your exchange and users
            with an end-to-end digital identity verification platform.
          </div>
          <div className="flex text-white text-xl mb-10 justify-center">
            Join our test group via
            <a
              className="flex text-[#ffd000] text-xl mb-10 justify-center px-1"
              href="https://testflight.apple.com/join/AcjgLO8G"
              rel="noreferrer noopener"
            >
              TestFlight
            </a>
            <div className="flex text-white text-xl mb-10 justify-center">
              today.
            </div>
          </div>
          <div className="flex justify-center text-center pb-10">
            <img src={testGroupQRCode} alt="qrCode" width={350} height={320} />
            <div className="px-10">
              <IdemVideo />
            </div>
          </div>
          <div className="flex text-white text-xl mb-10 justify-center">
            IDEM is a fully open source application shipped under MIT licence.
            Feel free to raise an issue on
            <a
              className="flex text-[#ffd000] text-xl mb-10 justify-center px-1"
              href="https://github.com/dltxio/idem-mobile"
              rel="noreferrer noopener"
            >
              GitHub.
            </a>
            <div className="flex text-white text-xl mb-10 justify-center">
              Or contact support below.
            </div>
          </div>
          <div className="flex justify-center text-center pb-10">
            <ContactLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
