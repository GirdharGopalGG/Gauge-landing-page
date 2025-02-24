import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";

const Banner = () => {
  return (
    <main className="bg-gradient-to-r from-red-950 to-red-900 dark:bg-red-950">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold">Gauge Innovations</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-white/90">
              Get Started
            </button>
          </div>
          <div className="order-1">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/qEwidO6KW34"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
