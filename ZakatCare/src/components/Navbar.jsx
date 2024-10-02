import "./header.css"
import logo from "/Logo.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import URL from "../../env";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '', current: true },
    { name: 'Our Programs', href: '/zakatcare/ourprogram', current: false },
    { name: 'Zakat', href: '/zakatcare/zakat', current: false },
    { name: 'About', href: '/zakatcare/about', current: false },
    { name: 'Contact', href: '/zakatcare/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/getuser`, { withCredentials: true });
                setUser(response.data.user);
                console.log(response.data.user)
                setIsLoggedIn(!!localStorage.getItem('sessionID'));
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);
    // console.log(user);
    return (
        <Disclosure style={{ backgroundColor: 'rgb(254, 247, 236)' }} as="nav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={"/"}><img
                                style={{ height: "39px" }}
                                alt="Zakatcare"
                                src={logo}
                                className="h-8 w-auto"
                            /></Link>
                        </div>
                        <div className="hidden ms-5 sm:ml-6 sm:block">
                            <div className="flex space-x-4 navlists">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-orange text-white' : 'bg-hover-orange  hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <Link to={'/zakatcare/donate'}><button style={{ backgroundColor: "red", color: "white" }} className='btn'>Donate</button></Link>

                        {/* Profile dropdown */}
                        <Menu  as="div" className="user relative ml-3">
                            {isLoggedIn && user ? (
                                <>
                                    <MenuButton  className="flex items-center rounded-full  text-sm focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <img alt={user?.name} src={user?.image?.url} className="h-8 w-8 rounded-full" />
                                        <span className="text-white ml-3">{user?.username}</span>
                                    </MenuButton>
                                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50">

                                        <MenuItem>
                                            {({ active }) => (
                                                <Link
                                                    to="/zakatcare/profile"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </Link>
                                            )}
                                        </MenuItem>

                                        <MenuItem>
                                            {({ active }) => (
                                                <Link
                                                    to="/zakatcare/logout"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </Link>
                                            )}
                                        </MenuItem>
                                    </MenuItems>
                                </>
                            ) : (
                                <div className="text-white w-full	 flex items-center justify-between">
                                    <Link to="/zakatcare/login" className="text-white btn">
                                        Login
                                    </Link>
                                    <Link to="/zakatcare/signup" className="text-white btn">
                                        Signup
                                    </Link>
                                </div>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
