'use client'
import { useState } from 'react'
import { Dialog, DialogPanel, Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuItem from './MenuItem'
import CustomButton from '../custom-button/CustomButton'

const navigation = [
    { name: 'Home', href: '#', custom: false },
    { name: 'Products', href: '#', custom: true },
    { name: 'Resources', href: '#', custom: true },
    { name: 'Pricing', href: '#', custom: false },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative inset-x-0 top-0 z-50">
            <Disclosure as="nav">
                <div>
                    <nav aria-label="Global" className="flex items-center justify-between h-20 p-6 lg:px-8">
                        {/* AQUI */}
                        <div className="flex items-center lg:flex-3 lg:gap-10">
                            <div className='flex gap-3 items-center'>
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-6 w-auto"
                                    />
                                </a>
                                <p className="text-lg text-gray-900 font-semibold leading-6">Untitle UI</p>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-6">
                                {navigation.map((item, key) => (
                                    <MenuItem name={item.name} href={item.href} custom={item.custom} key={key}></MenuItem>
                                ))}
                            </div>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <div className="flex gap-6 items-center">
                                <a href="#" className="text-base font-semibold leading-6 text-gray-800">
                                    Log in
                                </a>
                                <CustomButton title="Sign Up" custom={true} size="px-4 py-2"></CustomButton>
                            </div>
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </div>
            </Disclosure>
        </header>

    )
}