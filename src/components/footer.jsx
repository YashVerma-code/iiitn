import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import MapComponent from "./collegemap";

export default function Footer() {
  return (
    <footer className="bg-[#002D62] text-white py-8 px-4">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-center space-x-6">
          {[
            { icon: <Facebook />, href: "#" },
            { icon: <Twitter />, href: "#" },
            { icon: <Youtube />, href: "#" },
            { icon: <Instagram />, href: "#" },
            { icon: <Linkedin />, href: "#" }
          ].map((item, index) => (
            <a key={index} href={item.href}>
              <div className="h-10 w-10 rounded-full hover:bg-blue-800 p-2 transition-colors delay-75">
                {item.icon} 
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Important Links</h2>
            <ul className="space-y-2">
              {[
                "Grievance",
                "Networking Complaint",
                "Grievance Committee SC/ST Cell",
                "Anti-Ragging Committee",
                "Internal Complaint Committee",
                "Equal Opportunity Cell",
                "Policy for Prevention of Sexual Harassment of Women at Workplace"
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }}>
                  <a href="#" className="relative block text-sm transition-colors hover:text-blue-400">
                    {link}
                    <motion.div
                      className="h-0.5 w-full bg-blue-400 absolute left-0 bottom-0 origin-left scale-x-0"
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {[
                "Institute Webmail",
                "Online Fees Payment",
                "Academic Calendar",
                "How to Reach",
                "Location",
                "Tender",
                "Recruitment",
                "Guest House"
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }}>
                  <a href="#" className="relative block text-sm transition-colors hover:text-blue-400">
                    {link}
                    <motion.div
                      className="h-0.5 w-full bg-blue-400 absolute left-0 bottom-0 origin-left scale-x-0"
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>
                  Permanent Address: Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni,
                  Village - Waranga, PO - Dongargaon(Butibori), Tahsil-Nagpur (Rural), District Nagpur, Maharashtra- 441108
                </span>
              </p>
              <p className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5" />
                <span>9405215010</span>
              </p>
              <p className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5" />
                <a className="hover:text-blue-400" href="mailto:registrar@iiitn.ac.in">registrar@iiitn.ac.in</a>
              </p>

              <MapComponent />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm">
          <p>
            Copyright © 2025 | All Rights Reserved. Indian Institute of Information Technology, Nagpur.
          </p>
          <span>
          Designed & Developed by IIIT Nagpur Students
          </span>
        </div>
      </div>
    </footer>
  );
}
