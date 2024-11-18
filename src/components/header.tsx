
import { Link } from 'react-router-dom'
import { useTheme } from './ui/theme-provider'
import { Moon, Sun } from 'lucide-react';


const Header = () => {
    const {theme, setTheme} = useTheme();
    const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className='flex items-center'>
                <Link to={"/"}>
                    <img src="/WeatherCastLogo.png" alt="Weather Cast Logo" className="h-16"/>
                </Link>
                <span className={isDark ? "font-mono font-bold text-xl text-white" : "font-mono font-bold text-xl text-black" }>Weather Cast</span>
            </div>
            <div>
                {/* Search Box */}
                {/* Theme Toggle */}
                <div onClick={() => setTheme(isDark ? "light" : "dark")}
                    className={`flex items-center cursor-pointer transition-transform duration-500 
                    ${isDark ? "rotate-180" : "rotate-0"}`}>
                    { isDark ? <Sun className="h-6 w-6 text-yellow-500"/> : <Moon className="h-6 w-6 text-blue-500"/>}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
