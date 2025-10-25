'use client'

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItems_DropDown from "@/components/NavItems_DropDown";


const NavItems = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';

        return pathname.startsWith(path);
    }

    return (
        <>
            <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({ href, label, megaMenu }) => (
                <li key={href} className="relative group">
                <Link 
                    href={href} 
                    className={`hover:text-yellow-500 transition-colors ${
                    isActive(href) ? 'text-gray-100' : ''
                    }`}
                >
                    {label}
                    {megaMenu && (
                    <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    )}
                </Link>
                
                {megaMenu && (
                    <div className="hidden group-hover:block absolute top-full bg-black rounded-lg p-6 z-10 min-w-[700px]">
                    {/* <div className="hidden group-hover:block absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-6 z-50 min-w-[600px]"> */}
                    <div className="grid grid-cols-3 gap-6">
                        {megaMenu.map((column, colIndex) => (
                        <div key={colIndex}>
                            <h3 className="text-gray-300 mb-3 text-sm uppercase">
                            {column.title}
                            </h3>
                            <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                <Link 
                                    href={item.href} 
                                    className="font-bold text-gray-100 hover:text-yellow-500 text-sm block"
                                >
                                    {item.label}
                                    {item.description && (
                                    <span className="block text-xs text-gray-500 mt-1">
                                        {item.description}
                                    </span>
                                    )}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                </li>
            ))}
            </ul>
        </>

    )
}

export default NavItems