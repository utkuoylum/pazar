export default function Footer() {
  return (
    <div className="bg-black text-[#949494] py-14 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col justify-center gap-2">
          <img src="/assets/logolight.png" alt="footer logo" className="w-24" />
          <p className="text-white text-sm tracking-wide">
            &copy; projectpazar
          </p>
          <img
            src="/assets/payment.png"
            alt="payment methods"
            className="w-44"
          />
          <div className="text-[2rem] text-white flex gap-2">
            <i className="bx bxl-instagram hover:text-purple-600 cursor-pointer duration-300"></i>
            <i className="bx bxl-twitter hover:text-blue-400 cursor-pointer duration-300"></i>
            <i className="bx bxl-facebook hover:text-blue-600 cursor-pointer duration-300"></i>
            <i className="bx bxl-youtube hover:text-red-600 cursor-pointer duration-300"></i>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>

          <address className="text-base flex flex-col gap-2">
            <p>Ku'damm</p>
            <p>10719 Berlin</p>
            <p>Mobile: +49123123123</p>
            <p>email: pazar@pazarr.com</p>
          </address>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <p className="hover:text-white cursor-pointer duration-300">
            <span>
              <i className="bx bx-user"></i>
            </span>{" "}
            our account
          </p>
          <p className="hover:text-white cursor-pointer duration-300">
            <span>
              <i className="bx bxl-paypal"></i>
            </span>{" "}
            checkout
          </p>
          <p className="hover:text-white cursor-pointer duration-300">
            <span>
              <i className="bx bx-home-circle"></i>
            </span>{" "}
            order tracking
          </p>
          <p className="hover:text-white cursor-pointer duration-300">
            <span>
              <i className="bx bx-help-circle"></i>
            </span>{" "}
            help & support
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
