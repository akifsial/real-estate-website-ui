import logo from "../../../assets/svgs/logo.svg"

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-10 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="HostSwitch" className="w-[85px] h-[55px]" />
          </div>
          <p className="text-[16px] leading-relaxed">
            A Smarter Way to Match Hosts with Trusted PMs — Built for Transparency, Speed, and Results.
          </p>

          <div className="mt-5">
            <h3 className="text-sm mb-3 font-medium">Follow Us:</h3>
            <div className="flex gap-3">
              
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-[16px]">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Process</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">SUPPORT</h3>
          <ul className="space-y-2 text-[16px]">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Request a Callback</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[18px] leading-relaxed mb-4">
            Whether you’re a property owner or a PM company, drop your email to stay in the loop as we reshape the rental management experience.
          </p>
          <div className="flex items-center relative bg-white rounded-full overflow-hidden w-full">
            <input
              type="email"
              placeholder="Enter email address..."
              className="flex-1 w-[400px] px-4 py-4 text-sm text-gray-700 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-5 text-xs text-gray-400">
        <p>Copyright 2025. HostSwitch All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;