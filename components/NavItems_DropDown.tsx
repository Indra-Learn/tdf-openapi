const NavItems_DropDown = () => {
    return (
        <>
        <li>
            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="mega-menu-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Library
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Pro Version
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Newsletter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Playground
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                License
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Support Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        </>
    )
}

export default NavItems_DropDown