


"use client";
import React, { useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Divyanshu Singhal",
      role: "Product Designer",
      text: "This platform made creating my resume incredibly easy and stress-free. The professional templates helped me land multiple interviews!",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Khushi Singh",
      role: "Product Designer",
      text: "The resume builder saved me so much time. I was able to create and download a professional resume in just a few minutes.",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Jatin Israni",
      role: "Front End Developer",
      text: "I appreciated the intuitive design and the ability to download in PDF format. It made job applications so much easier.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Diya Singhal",
      role: "Back End Developer",
      text: "The platform’s easy-to-use interface and elegant templates helped me build a standout resume quickly. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Ashutosh Tripathi",
      role: "Project Manager",
      text: "I was impressed by how polished and professional my resume looked. It definitely gave me an edge in my job search.",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Riya Sharon",
      role: "Graphic Designer",
      text: "The real-time preview feature allowed me to see exactly how my resume would look, making the editing process seamless and efficient.",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <div id="testimonials" className="bg-black h-full text-white">
      <div className="flex flex-col items-center pb-10 px-4 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mt-10 space-y-6 text-center">
          <p className="text-6xl gradient-text font-extralight">|</p>
          <p className="text-base md:text-2xl lg:text-3xl leading-10 gradient-text font-bold px-2">
            Get Hired 33% faster with our feature-packed and <br className="hidden md:block" /> easy-to-use resume builder app
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full max-w-5xl place-items-center">
          
          {/* Feature Card */}
          <div className="flex flex-col items-center bg-[#161616] p-6 rounded-lg shadow-md hover:shadow-lg transition-all lg:w-[80%]">
            <img src="/images/Group-1.png" alt="Professional Templates" className="w-12" />
            <h3 className="font-bold mt-4">Professional Templates</h3>
            <p className="text-center text-[#a5a5a5] mt-2">
              Choose from over 30 ATS-friendly modern and professional templates.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#161616] p-6 rounded-lg shadow-md hover:shadow-lg transition-all lg:w-[80%]">
            <img src="/images/Group-2.png" alt="Free resume examples" className="w-12" />
            <h3 className="font-bold mt-4">Free Resume Examples</h3>
            <p className="text-center text-[#a5a5a5] mt-2">
              Use our 500+ resume examples to create job-winning resumes.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#161616] p-6 rounded-lg shadow-md hover:shadow-lg transition-all lg:w-[80%]">
            <img src="/images/Group-3.png" alt="Customize fonts and colors" className="w-12" />
            <h3 className="font-bold mt-4">Customize Fonts & Colors</h3>
            <p className="text-center text-[#a5a5a5] mt-2">
              Select custom fonts and colors to make your resume stand out.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#161616] p-6 rounded-lg shadow-md hover:shadow-lg transition-all lg:w-[80%]">
            <img src="/images/Group-4.png" alt="ATS-friendly templates" className="w-12" />
            <h3 className="font-bold mt-4">ATS-friendly Templates</h3>
            <p className="text-center text-[#a5a5a5] mt-2">
              Optimize your resume for ATS to increase your interview chances.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 w-full max-w-6xl">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
            What people are saying
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.slice(0, visibleCount).map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#111] text-white p-6 rounded-xl shadow-md transition-all hover:shadow-lg"
              >
                <p className="mb-4 text-sm text-gray-300">{testimonial.text}</p>
                <div className="flex items-center space-x-4 mt-5">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {visibleCount < testimonials.length && (
          <button
            onClick={() => setVisibleCount(visibleCount + 3)}
            className="mt-10 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
