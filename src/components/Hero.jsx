import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Slider from 'react-slick';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css"
import img1 from "../assets/exe/vice.jpg"
import img2 from "../assets/exe/chair.jpg"
import img3 from "../assets/exe/vicew.jpg"
import img4 from "../assets/exe/chairw.jpg"
// import img2 from "../assets/chair.png"
// import img2 from "../assets/chair.png"
// import img2 from "../assets/chair.png"
// import img2 from "../assets/chair.png"
// import img2 from "../assets/chair.png"
// import img2 from "../assets/chair.png"

const Hero = () => {


  const images = [
    'https://acmajce.vercel.app/assets/aibal-DDtIRdZu.png', // Replace these URLs with your image URLs
    img1,
    'https://acmajce.vercel.app/assets/aibal-DDtIRdZu.png',
    'https://acmajce.vercel.app/assets/joel-DaJB1Sn_.png',
    'https://acmajce.vercel.app/assets/aibal-DDtIRdZu.png',

  ];
  const slides = [
    { src: img1, text: "Aibal Jose(CHAIR)" },
    { src: img2, text: "This is the second slide" },
    { src: img3, text: "This is the second slide" },
    { src: img4, text: "This is the second slide" },
  ];


  const scrollContainerRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const parallaxRef = useRef(null);

  return (
    <Section



      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>







        <div className="relative  z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Ready to Scale Your<br></br>&nbsp;Skill&nbsp;With {` `}
            <span className="inline-block relative">
              ACM AJCE{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Join our community of passionate students and professionals dedicated to advancing computing and technology.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRlY2glMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div> */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            /> */}
          </div>

          <BackgroundCircles />
        </div>





        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Execom"
        />
        <Slider {...settings} className="mt-20">

          {slides.map((slide, index) => (
            <div key={index} className="condd">
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                className="shadow-lg carousel-image"
              />
              <div className="textcon">
                {slide.text}
              </div>
            </div>
          ))}
        </Slider>


      </div>

      <BottomLine />
    </Section>


  );
};

export default Hero;
