import "./header.css"
import logo from "/Logo.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/', current: true },
    // { name: 'Our Programs', href: '/zakatcare/ourprogram', current: false },
    { name: 'Zakat', href: '/zakatcare/zakat', current: false },
    { name: 'About', href: '/zakatcare/about', current: false },
    { name: 'Contact', href: '/zakatcare/contact', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [active, setActive] = useState(0);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_LOCAL_HOST}/zakatcare/getuser`, { withCredentials: true });
                setUser(response.data.user);
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
    useEffect(() => {
        const getData = async () => {
            try {
                const loginData = await axios.get(`${import.meta.env.VITE_LOCAL_HOST}/login/success`, { withCredentials: true });

                // Set user state
                setUser(loginData.data.user);

                // Check if user is not undefined
                if (loginData.data.user !== undefined) {
                    // If sessionId exists, set it in local storage
                    if (loginData?.data?.sessionId) {
                        localStorage.setItem('sessionID', loginData?.data?.sessionId);
                    }

                    // Update login status
                    setIsLoggedIn(!!localStorage.getItem('sessionID'));
                }
            } catch (error) {
                console.error('Error fetching login data:', error);
            }
        };

        getData();
    }, []);
    return (
        <Disclosure as="nav">
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
                    <div className="flex flex-1 items-center justify-center  sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={"/"}>
                                <img
                                    style={{ height: "70px" }}
                                    alt="Zakatcare"
                                    src={logo}
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>
                        <div className="hidden ms-5 sm:ml-6 sm:block">
                            <div className="flex space-x-4 navlists">
                                {navigation.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={` px-3 py-2 text-sm font-medium ${active === index ? 'border-btm border-orange' : ''
                                            }`}
                                        onClick={() => setActive(index)} // Update the active state
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <Link to={'/zakatcare/donate'}><button onClick={() => { setActive(null) }} style={{ backgroundColor: "#6059C9", color: "white" }} className='btn'>Donate</button></Link>

                        {/* Profile dropdown */}
                    </div>
                </div>
            </div>
            {/* Mobile view */}
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
