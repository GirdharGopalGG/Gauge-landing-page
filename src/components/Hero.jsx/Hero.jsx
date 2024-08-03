// import React from "react";
// import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

// const Hero = () => {
//   return (
//     <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
//       <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
//         <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
//           <div
//             data-aos="fade-right"
//             data-aos-duration="400"
//             data-aos-once="true"
//             className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
//           >
//             <h1 className=" text-4xl ">
//             GAUGE is a cutting-edge tool designed to help you track your progress and measure success in various domains.


//             </h1>
//             <p className="">
//             Get ready to experience the future of social finance with <a href="http://Gauge.fun" target="_blank"> Gauge.fun</a> We're redefining the basics of SoFi mechanics and adding an innovative twist that sets us apart.
//             </p>
//             <div className="space-x-4">
//               <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
//                 Get Started
//               </button>
//               <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
//                 Get Started
//               </button>
//             </div>
//           </div>
//           <div
//             data-aos="fade-left"
//             data-aos-duration="400"
//             data-aos-once="true"
//             className="mx-auto max-w-xs p-4"
//           >
//             <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Hero;










import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-red-950 to-red-900 pt-20 dark:bg-red-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left"
          >
            <h1 className="text-4xl">
              GAUGE is a cutting-edge tool designed to help you track your progress and measure success in various domains.
            </h1>
            <p className="">
              Get ready to experience the future of social finance with <a href="http://Gauge.fun" target="_blank"> Gauge.fun</a>. We're redefining the basics of SoFi mechanics and adding an innovative twist that sets us apart.
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-red-500 bg-red-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-red-600">
                Get Started
              </button>
              <button className="border-1 rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
