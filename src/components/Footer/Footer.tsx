import Link from "next/link"

import { Mail, Phone, MapPin} from "lucide-react"
import Socials from "../Socials/Socials";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 py-6 sm:py-8">
        {/* Main Content Section - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
          {/* Contact Section - Left */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">Contact & Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <MapPin size={16} className="text-[#800301] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  SRM Institute of Science and Technology
                  <br />
                  Vadapalani Campus, Chennai - 600026
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <Mail size={16} className="text-[#800301] flex-shrink-0" />
                <Link
                  href="mailto:srmvmun25@gmail.com"
                  className="text-gray-300 hover:text-[#EFDB9E] text-sm transition-colors"
                >
                  srmvmun25@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <Phone size={16} className="text-[#800301] flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <Link href="tel:+91 89251 26677" className="text-gray-300 hover:text-[#EFDB9E] text-sm transition-colors">
                  Secretary General :+91 89251 26677
                </Link>
                <Link href="tel:+91 98416 98150" className="text-gray-300 hover:text-[#EFDB9E] text-sm transition-colors">
                  Deputy Secretary General :+91 98416 98150
                </Link>
                </div>
                
              </div>
              <div className="flex justify-center lg:justify-start">
                <Socials />
              </div>
            </div>
          </div>

          

          {/* Map Component - Right */}
          <div className="space-y-3 text-center lg:text-right">
            <h3 className="text-lg font-semibold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">Find Us</h3>
            <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7465955127855!2d80.20787827454782!3d13.051795313116042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ea218fc7e3%3A0x70bbbca6edfc9243!2sSRM%20University%20Vadapalani%20City%20Campus!5e0!3m2!1sen!2sin!4v1755702508859!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">© {new Date().getFullYear()} SRMV MUN 25. All rights reserved.</div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] text-sm transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
