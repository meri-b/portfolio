import React from "react";
import previewImage from "../../project_previews/graphicimpulse1.jpg"; // Adjust the path accordingly


function GraphicImpulse1() {
  return (
      <div
      name="graphicimpulse1"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Graphic Impulse 1.0</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[1000px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2016, I applied and received a Undergraduate Research Opportunity Program
        grant and partnered with Dan Szafir and the Interactive Robotics and Novel Technologies lab
        at CU Boulder to create an interactive projection mapped pole performance for Pole Theatre USA,
        which I performed live at the Boulder Theater and won 1st place in the semi-pro art category.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>
        
      </div>
    );

}
export default GraphicImpulse1;