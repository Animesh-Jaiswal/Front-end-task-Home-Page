import siteLogo from "../assets/images/siteLogo.webp"

export default function Footer() {
    return (
        <footer id="contact" className="bg-white pt-15">
            <div className="max-w-6xl mx-auto pb-10 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-200">
                <div className="px-5">
                    <img src={siteLogo} alt="Empire Blue" className="w-50 py-3" />
                    <p className="mt-5 text-md text-gray-600">Providing clean and safe water solutions for a healthier tomorrow. Our commitment to quality and innovation makes us the trusted choice in water treatment.</p>
                    <div className="flex justify-start items-center gap-3 mt-8">
                        <a href=""><i className="fa-brands fa-facebook-f text-gray-600 hover:text-blue-800 text-lg"></i></a>
                        <a href=""><i className="fa-brands fa-twitter text-gray-600 hover:text-blue-800 text-lg"></i></a>
                        <a href=""><i className="fa-brands fa-square-instagram text-gray-600 hover:text-blue-800 text-lg"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin-in text-gray-600 hover:text-blue-800 text-lg"></i></a>
                    </div>
                </div>
                <div className="px-5">
                    <h5 className="font-semibold text-xl">Quick Links</h5>
                    <div className="mt-6 text-lg text-gray-600 flex flex-col gap-3">
                        <a href="" className="hover:text-blue-800">About Us</a>
                        <a href="" className="hover:text-blue-800">Our Services</a>
                        <a href="" className="hover:text-blue-800">Latest News</a>
                    </div>
                </div>
                <div className="px-5">
                    <h5 className="font-semibold text-xl">Our Services</h5>
                    <div className="mt-6 text-lg text-gray-600 flex flex-col gap-3">
                        <a href="" className="hover:text-blue-800">Water Testing</a>
                        <a href="" className="hover:text-blue-800">Water Purification</a>
                        <a href="" className="hover:text-blue-800">Water Treatment</a>
                        <a href="" className="hover:text-blue-800">Expert Consultation</a>
                    </div>
                </div>
                <div className="px-5">
                    <h5 className="font-semibold text-xl">Contact Us</h5>
                    <div className="mt-6 text-lg text-gray-600 flex flex-col gap-3">
                        <div className="flex gap-2">
                            <a href=""><i className="fa-solid fa-location-dot text-blue-900"></i></a>
                            <span>Empire Blue Pvt. Ltd.
                            Chhindwara, Madhya Pradesh
                            India</span>
                        </div>
                        <a href="" className="hover:text-blue-800"><i className="fa-solid fa-phone text-blue-900 me-1"></i>   +91 8867268719</a>
                        <a href="" className="hover:text-blue-800"><i className="fa-solid fa-envelope text-blue-900 me-1"></i>   info@empireblue.in</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-7 ">
                <span className="text-md text-gray-600">© 2025 Empire Blue. All rights reserved.</span>
                <div className="flex gap-6">
                    <a href="" className=" text-md text-gray-600 hover:text-blue-800">Privacy Policy</a>
                    <a href="" className=" text-md text-gray-600 hover:text-blue-800">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}