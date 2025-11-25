import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 font-sans bg-white">
      {/* Sidebar */}
      <div className="bg-black text-white p-6 flex flex-col items-center gap-6 md:col-span-1">
        <div className="bg-white rounded-full overflow-hidden w-40 h-40">
          <Image
            src="/profile.jpg"
            alt="Isabel Schumacher"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        {/* About Me */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor,
            quis tempus arcu elementum.
          </p>
        </div>

        {/* Contact */}
        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={16} /> <span>+123-456-7890</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={16} /> <span>hello@reallygreatsite.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> <span>123 Anywhere Street., Any City</span>
          </div>
        </div>

        {/* Skills */}
        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li>Web Design</li>
            <li>Branding</li>
            <li>Graphic Design</li>
            <li>SEO</li>
            <li>Marketing</li>
          </ul>
        </div>

        {/* Language */}
        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Language</h3>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li>English</li>
            <li>French</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:col-span-2 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Isabel Schumacher</h1>
          <p className="text-lg text-gray-600">Graphics Designer</p>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900">(2011 – 2015) <span className="uppercase">Wardiere University</span></p>
              <p className="text-gray-700">Bachelor of Design</p>
              <p className="text-gray-700">GPA: 3.65</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">(2014 – 2019) <span className="uppercase">Wardiere University</span></p>
              <p className="text-gray-700">Bachelor of Design</p>
              <p className="text-gray-700">GPA: 3.74</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900">(2020 – 2023) <span className="uppercase">Senior Graphic Designer</span></p>
              <p className="text-gray-700">Fauget Studio</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Created more than 100 graphic designs for big companies</li>
                <li>Completed a lot of complicated work</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900">(2017 – 2019) <span className="uppercase">Senior Graphic Designer</span></p>
              <p className="text-gray-700">Iarana, Inc</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Created more than 100 graphic designs for big companies</li>
                <li>Completed a lot of complicated work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
