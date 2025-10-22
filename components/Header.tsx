import Link from "next/link";
import Image from "next/image";
// import NavItems from "./NavItems";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";


const Header = () => {
  return (
    <header className="sticky top-0 header border-b-1 border-gray-300 border-solid">
        <div className="container header-wrapper">
            {/* <Link href="/">
                <Image src="/assets/icons/logo.png" alt="TheDataFestAi Logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>x`x`
            </Link> */}

            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/assets/icons/logo.png" className="h-8" alt="TheDataFestAi Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TheDataFestAI Ticker</span>
            </Link>

            <nav className="hidden sm:block">
                <NavItems />
            </nav>

            <UserDropdown />
        </div>
    </header>
  )
}

export default Header