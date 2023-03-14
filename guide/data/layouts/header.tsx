import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Navigation from '../components/navigation'

const imagesPath = 'assets'

const Header = () => {
  return (
    <header>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <StaticImage
                className="w-auto h-auto max-w-[220px]"
                src={`../${imagesPath}/sotalitrav-logo.png`}
                alt="Stotalitrav-logo"
              />
            </Link>
          </div>

          {/* navbar */}
          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
            <Navigation />
            {/*  <div className="w-px h-5 bg-gray-300"></div> */}

            {/* <a
              href="#"
              title=""
              className="
                          px-5
                          py-2
                          text-base
                          font-semibold
                          leading-7
                          text-gray-900
                          transition-all
                          duration-200
                          bg-transparent
                          border border-gray-900
                          rounded-xl
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                          hover:bg-gray-900 hover:text-white
                          focus:bg-gray-900 focus:text-white
                        "
              role="button"
            >
              Contact Nous
            </a> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
