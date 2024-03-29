import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex items-center justify-center mt-10 font-serif font-semibold text-white bg-gradient-to-t from-black to-neutral-900/30">
      <div className="container flex w-full py-5 md:flex-row xs:flex-col">
        {/* Logo & Description */}
        <div className="px-4">
          <h1 className="flex items-center gap-3 mb-1 text-xl font-bold text-justify w-fit sm:text-3xl sm:text-left">
            <img src={"/logo.png"} alt="Logo" className="max-w-[80px] bg" />A
            Pizza
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, voluptate
          </p>
          <br />
        </div>
        <div className="flex justify-between w-full md:flex-row xs:flex-col">
          {/* Important Links */}
          <div className="flex flex-col items-center px-4 py-8">
            <h1 className="p-2 mb-3 text-xl font-bold text-justify rounded-lg w-fit sm:text-xl text-nowrap sm:text-left">
              Important Links
            </h1>
            <ul className="flex flex-col items-center justify-center gap-3 cursor-pointer w-fit">
              <li className="rounded-lg ">Home</li>
              <li className="rounded-lg">About</li>
              <li className="rounded-lg">Services</li>
              <li className="rounded-lg">Login</li>
            </ul>
          </div>
          {/* Links */}
          <div className="flex flex-col items-center px-4 py-8">
            <h1 className="p-2 mb-3 text-xl font-bold text-justify rounded-lg w-fit sm:text-xl sm:text-left">
              Links
            </h1>
            <ul className="flex flex-col items-center gap-3 cursor-pointer w-fit">
              <li className="rounded-lg ">Home</li>
              <li className="rounded-lg ">About</li>
              <li className="rounded-lg ">Services</li>
              <li className="rounded-lg ">Login</li>
            </ul>
          </div>
          {/* Extra Info */}
          <div className="flex flex-col items-center px-4 py-8">
            {/* Address */}
            <div className="flex items-center gap-3 p-2 mt-3 rounded-lg text-nowrap">
              <MapPin />
              <p>Noida, Uttar Pradesh</p>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 p-2 mt-3 rounded-lg">
              <Phone />
              <p className="text-nowrap">+91 123456789</p>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 p-2 mt-6 rounded-lg">
              <a href="#">
                <Instagram className="text-3xl" />
              </a>
              <a href="#">
                <Facebook className="text-3xl" />
              </a>
              <a href="#">
                <Youtube className="text-3xl" />
              </a>
              <a href="#">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
                    fill="white"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24">
                  <path
                    d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
