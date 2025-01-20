import React, { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Resume() {
  const [showModal, setShowModal] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const handleOpenModal = (file) => {
    setPdfFile(`${file}#zoom=55`);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPdfFile(null);
  };

  return (
    <div
      name="resume"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
    >
      {/* Title */}
      <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Resumes</h1>
      </div>

      <div className="w-full lg:w-[60%] text-center text-lg lg:text-3xl leading-relaxed">
          <p>
          Because I essentially have two careers, I have resumes tailored to each. You can find them here.
          </p>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handleOpenModal("/tech_resume.pdf")}
          className="bg-cyan-500 text-gray-900 text-4xl font-bold px-10 py-6 rounded-md hover:scale-125 hover:bg-cyan-600 transition duration-300"
        >
          Tech
        </button>
      </div>

      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handleOpenModal("/circus_resume.pdf")}
          className="bg-cyan-500 text-gray-900 text-4xl font-bold px-7 py-6 rounded-md  hover:scale-125 hover:bg-cyan-600 transition duration-300"
        >
          Circus
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 w-[95%] xl:w-[80%] max-h-[90%] relative">
          {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-red-500 text-4xl text-white font-bold rounded-full w-8 h-8 flex items-center justify-center hover:scale-150 hover:bg-red-600 transition duration-300"
            >
              &times;
            </button>
            {/* PDF Display */}
            <div className="w-full h-[500px] xl:h-[700px]">
              <iframe
                src={pdfFile} 
                className="w-full h-full"
                title="Resume"
                frameBorder="0"
              ></iframe>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
