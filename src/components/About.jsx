import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex flex-col items-center pt-[80px] pb-24 overflow-y-auto" // Added extra padding-bottom (pb-24)
    >
      {/* Top Section */}
      <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Hi, I'm Meri.</h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[1000px] px-4 flex flex-col lg:flex-row gap-8 items-center">
        {/* Images */}
        <div className="flex flex-col gap-4 w-full lg:w-[40%]">
          {/* On mobile, only the first image will display */}
          <img
            src="/images/cyr-1.jpg"
            alt="Meri cyr wheel"
            className="rounded-md shadow-lg object-cover w-full h-[400px] lg:h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[60%] text-lg lg:text-xl leading-relaxed">
          <p>
            I'm a Colorado based software developer who specializes in backend
            web development. I like thinking about how to organize a server so
            that it complements the user interface. I feel successful in my work
            when I write well-documented, well-organized, well-tested,
            performant code. I feel happy about my existence when the code I
            write is for a mission-based organization that works on progressive
            social impact or climate change.
          </p>
          <br />
          <p>
            I'm also a circus and movement artist. I specialize in cyr wheel and
            experimental contemporary pole dance. I've been performing circus
            professionally since 2015. I'm one of the only people who regularly
            teaches and performs cyr wheel in Colorado. I've claimed 5
            professional first-place medals in pole dance, including the 2020
            PSO National Artistic champion title. I've taught pole locally since
            2014 and have done teaching residencies in San Francisco CA,
            Portland OR, Raleigh NC, Paris France, and Berlin Germany. I like to
            choreograph new works and perform in ensemble shows. Sometimes, I
            like to make my tech skills and art skills overlap.
          </p>
          <br />
          <p>
            Finally, I'm a human being. Having balance in my life is very important to me.
            I've thought about whether or not to separate my two professional selves into
            two different websites. In the end, I find it is too challenging to untangle all
            the parts of myself into branded pieces. I hope that this page manages, in some
            way, to represent all the parts of who I am, how they intersect, and why that is special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
