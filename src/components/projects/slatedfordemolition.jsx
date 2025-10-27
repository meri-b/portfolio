import React from "react";
import previewImage from "../../project_previews/sfd_cover.jpg"; // Adjust the path accordingly


function SlatedForDemolition() {
  return (
      <div
      name="slated-for-demolition"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Slated For Demolition</h1>
        </div>

      
        <img
        src={previewImage}
        alt="Preview"
        className="w-[400px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> Slated For Demolition is a choice based text game created in Twine. It was submitted to the 2025 Interactive Fiction Competition and placed 5th out of 85 entries.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p><i>All you wanted was a Slurpee™, and somehow you have found yourself haunted by a relentless marinara pasta demon. With a mysterious checklist discovered in your back pocket, what else is there to do but wander museums of memories and perform some arcane ritual to rid yourself of the haunting specter?</i></p>
        <br></br>
        <p><i>Play as yourself, play as me, play as spaghetti, play as sauce. Find closure in the end. Or don't.</i></p>
        <br></br>
        <p>This was my first Twine piece, and my first entry into the interactive fiction competition. Development of the game took about 10 months. The story is largely autobiographical.
            For that reason, I won't say much more about it here and let the work speak for itself. Estimated playtime is 1-2 hours.
        </p>

        <br></br>
        <p style={{ color: "#00FF00" }}><a href="/Slated_for_demolition2.html"><u>Play it here.</u></a></p>

        <br></br>
        <p style={{ color: "#00FF00" }}><a href="https://ifdb.org/viewgame?id=8t3utoclkqbyujlm"><u>View on IFDB</u></a></p>
        </div>

       


      </div>
    );

}
export default SlatedForDemolition;