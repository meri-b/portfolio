import React from "react";
import previewImage from "../../project_previews/stardust.jpg"; // Adjust the path accordingly


function Stardust() {
  return (
      <div
      name="stardust"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Wearables: Stardust</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[600px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> I assembled, sewed, and programmed LEDs into a space themed costume for the 2016
        Colorado Pole Championships using the Adafruit FLORA (similar to Arduino) and Adafruit neopixels. 
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default Stardust;