import React from 'react'
import Link from 'next/link';

const navItems = [
  {
    id: 1,
    href: '/',
    text: 'Accueil',
  },
  {
    id: 2,
    href: '/apropos',
    text: 'A props de nous',
  },
  {
    id: 3,
    href: '/services',
    text: 'Nos Services',
  },
  {
    id: 4,
    href: '/contact',
    text: 'Contact',
  },
]

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-12">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id} className="navLink">
              <Link href={navItem.href} >
                {navItem.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

{
  /* <div className="flex items-center space-x-12">
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Features{' '}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Pricing{' '}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Automation{' '}
              </a>
            </div> */
}

export default Navigation
