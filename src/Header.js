import { CalculatorIcon } from '@heroicons/react/24/outline'


export default function Header() {

    return (
        <header className="header">
        

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
                    <li>tips</li>
                    <li className="calc--link"><a href="#calculator">calculator</a></li>
                </ul>
            </nav>
        </header>
    )

}