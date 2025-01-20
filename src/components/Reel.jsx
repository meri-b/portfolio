import React from "react";

function Reel() {
  const videos = [
    {
      url: "https://www.youtube.com/embed/QQthP5HHQew?si=rmgfqZwfE4w1IbFy",

      description: "General circus demo reel",
    },
    {
      url: "https://www.youtube.com/embed/l9GTgj6nXbE?si=VJtea8kf7byqgkGT",
      description: "Full cyr wheel act",
    },
    {
      url: "https://www.youtube.com/embed/LalF7upCcYo?si=WJ_HE0MC6RsvmZ6J",
      description: "Full experimental pole act",
    },
    {
      url: "https://www.youtube.com/embed/GCl5eCKuJB4?si=alhCbhmN46JkN6Dy",
      description: "Full lyra act",
    },
    {
      url: "https://www.youtube.com/embed/8XcQW4pSEgA?si=gzgTYK_AUqi_Og-n",
      description: "Full contemporary pole act",
    },
    {
      url: "https://www.youtube.com/embed/HJz_q0mr9nE?si=hSNx3czxh6tLTawC",
      description: "Full contemporary pole act",
    },
  ];

  return (
    <div
      name="reel"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px]" // Adjust for navbar height
    >
      {/* Header */}
      <div className="w-full text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Performance Work</h1>
        <p className="mt-4 text-lg lg:text-2xl max-w-[1000px] mx-auto">
          At this time, I am primarily interested in doing feature performances on cyr wheel, but can also do full solo act or supporting ensemble work on lyra and pole. Please see this selection of demo videos and full act performances to get a sense of my performance capabilities and style.
        </p>
      </div>

      {/* Featured Video */}
      <div className="w-full flex flex-col items-center px-4 mb-8">
        
        <div 
          className="w-full max-w-[900px] relative overflow-hidden"
          
          style={{
            height: "calc(50vw)", // Make it approximately twice as wide as tall
            maxHeight: "600px",   // Limit the maximum height for very wide screens
          }}
        >
        

          <iframe
            src="https://www.youtube.com/embed/UNS9pD_8wy4?si=hFxZ3AD4pnwa8b8r"
            title="Featured Video"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
        </div>

        <p className="mt-4 text-lg lg:text-2xl text-center max-w-[800px]">
          Cyr wheel demo reel
        </p>

      </div>

      {/* Video Grid */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-24 gap-8 max-w-[1200px] mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={video.url}
                  title={`Video ${index + 1}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-lg mt-2">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reel;
