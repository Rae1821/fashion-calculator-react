import { CalculatorIcon } from '@heroicons/react/24/outline'


export default function Header() {

    return (
        <header className="header">
        
        <div>
            <button class="mobile-nav-toggle" aria-controls="primary-navigation">
                <span class="hamburger"></span>
            </button>
            <nav>
                <ul id="primary-navigation" data-visible="false" class="primary-navigation">
                    <li><a href="index.html" alt="home">home</a></li>
                    <li><a href="index.html" alt="home">benefits</a></li>
                    <li><a href="index.html" alt="home">how it works</a></li>
                    <li><a href="index.html" alt="home">start here</a></li>
                </ul>
            </nav>
        </div>

            <nav>
                <ul className="nav--list--1">
                    <li><a href="index.html">home</a></li>
                    <li><a href="#content">benefits</a></li>
                </ul>
                <div className="line--left">
                    <div className="line--left--fill"></div>
                </div>
                <div>
                    <CalculatorIcon className="h-2 w-2 calculator" />
                </div>
                <div className="line--right">
                    <div className="line--right--fill"></div>
                </div>
                <ul className="nav--list--2">
                    <li>how it works</li>
                    <li>calculate</li>
                </ul>
            </nav>
        </header>
    )

}