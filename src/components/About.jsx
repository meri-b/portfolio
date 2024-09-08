import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-full max-w-[1000px] px-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="sm:text-right text-3xl sm:text-5xl font-bold">
              <p>Hi, I'm Meri.</p>
            </div>
            <div className="text-left text-lg sm:text-3xl">
              <p>
                I'm a Colorado based software developer who specializes in
                backend web development. I like thinking about how to organize a
                server so that it complements the user interface. I feel
                successful in my work when I write well-documented,
                well-organized, well-tested, performant code. I feel happy about
                my existence when the code I write is for a mission-based
                organization that works on progressive social impact or climate
                change.
              </p>
              <br />
              <p>
                I'm also a circus and movement artist. I specialize in cyr wheel
                and experimental contemporary pole dance. I've been performing
                circus professionally since 2015. I'm one of the only people who
                regularly teaches and performs cyr wheel in Colorado. I've
                claimed 5 professional first-place medals in pole dance,
                including the 2020 PSO National Artistic champion title. I've
                taught pole locally since 2014 and have done teaching
                residencies in San Francisco CA, Portland OR, Raleigh NC, Paris
                France, and Berlin Germany. I like to choreograph new works and
                perform in ensemble shows. Sometimes, I like to make my tech
                skills and art skills overlap.
              </p>
              <br />
              <p>
                Finally, I'm a human being. I like to roller skate, garden,
                read, paint, wood carve, play video games, watch reality TV,
                take long walks with my dog, eat food, and take naps. Having
                balance in my life is very important to me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
