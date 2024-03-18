import Copyright from "./Copyright"
import FooterNavbar from "./FooterNavbar"
import FooterNavbarLatest from "./FooterNavbarLatest"
import FooterNavbarTop from "./FooterNavbarTop"



function Footer() {
  return (
    <div>
        <div>
            <div className="bg-white dark:bg-black to-gray-400 py-20">

              {/* footer top section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-5 bg-gray-50 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300">

                    {/* col 1 */}
                    <div className="bg-gray-50 shadow-md hover:shadow-sm w-full p-10 rounded-xl cursor-default border hover:border">
                      <div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#234] dark:text-white capitalize underline underline-offset-[4px] mb-10 shadow-sm border rounded-ee-full border-l-0 border-t-0 line-clamp-1">about us</h3>
                        </div>

                        <div>
                          <p className="text-[1rem] line-clamp-[8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum minima autem dicta quasi, velit, quia vel natus a ad non blanditiis quod nobis magni odit incidunt voluptas provident voluptatibus.</p>
                        </div>
                      </div>
                    </div>

                    {/* col 2 */}
                    <div className="bg-gray-50 shadow-md hover:shadow-sm w-full p-10 rounded-xl cursor-default border hover:border">
                      <div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#234] dark:text-white capitalize underline underline-offset-[4px] mb-10 shadow-sm border rounded-ee-full border-l-0 border-t-0 line-clamp-1">quick links</h3>
                        </div>

                        <div>
                          <FooterNavbar />
                        </div>
                      </div>
                    </div>

                    {/* col 3 */}
                    <div className="bg-gray-50 shadow-md hover:shadow-sm w-full p-10 rounded-xl cursor-default border hover:border">
                      <div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#234] dark:text-white capitalize underline underline-offset-[4px] mb-10 shadow-sm border rounded-ee-full border-l-0 border-t-0 line-clamp-1">top</h3>
                        </div>

                        <div>
                          <FooterNavbarTop />
                        </div>
                      </div>
                    </div>

                    {/* col 4 */}
                    <div className="bg-gray-50 shadow-md hover:shadow-sm w-full p-10 rounded-xl cursor-default border hover:border">
                      <div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#234] dark:text-white capitalize underline underline-offset-[4px] mb-10 shadow-sm border rounded-ee-full border-l-0 border-t-0 line-clamp-1">latest</h3>
                        </div>

                        <div>
                          <FooterNavbarLatest />
                        </div>
                      </div>
                    </div>


                </div>

                {/* footer bottom section */}
                <div className="max-w-7xl mx-auto">
              <Copyright />
            </div>
            </div>

            
        </div>
    </div>
  )
}

export default Footer