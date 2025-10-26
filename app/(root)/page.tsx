// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
    <>

<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-1">

        {/* Home-Jumbotron */}
        <section className="bg-center bg-cover bg-no-repeat bg-[url('/images/home-jumbotron-2.jpg')] bg-gray-300 bg-blend-multiply mb-4">
            <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-36">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world&apos;s potential</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at TDF&apos;s Ticker we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
            </div>
        </section>

        {/* 1st Hero Section */}
        <div className="container mx-auto mt-1 flex items-center justify-center">

            <div className="text-white mt-1">
            <p className="text-7xl font-bold">What we are offering,</p>
            <p className="text-4xl font-semibold text-yellow-400 mt-4">
                An AI enabled <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">Smart Ticker</span> & <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Algo Trading</span>
            </p>
            <p className="text-4xl font-semibold text-yellow-400 mt-4">
                with <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Portfolio Management</span>
            </p>
            <div className="w-48 h-2 border-b-4 border-purple-600 mt-1 mb-1"></div>
            <p className="text-2xl text-gray-400 mt-6">You can do stock analysis using AI, automate the trading with powerful Algo and develop new strategies and back test it in longer historical data.</p>
            </div>
            <div>
                <img className="max-w-2xl h-130" src="https://i.ibb.co/z8kWxyL/pexels-andrea-piacquadio-3979198-removebg-preview.png" alt="Image" />
            </div>
        </div>



        {/* 2nd Hero Section */}
        {/* 
        <div className="container mx-auto mt-8 flex items-center justify-center">
            <div>
                <img className="max-w-2xl h-auto" src="https://i.ibb.co/z8kWxyL/pexels-andrea-piacquadio-3979198-removebg-preview.png" alt="Image" />
            </div>
            <div className="text-white mt-8">
                <p className="text-8xl font-bold">I am</p>
                <p className="text-4xl font-semibold text-yellow-400 mt-4">Passionate Web Developer</p>
                <div className="w-36 h-2 border-b-4 border-purple-600 mt-2 mb-4"></div>
                <p className="text-2xl text-gray-400 mt-8">I am a passionate Web Developer with over 5 years of experience in creating compelling visual designs.</p>
            </div>
        </div>
        */}

        {/* Investment Categories Section */}
        <div className="container mx-auto mt-20 px-4">
        <h2 className="text-6xl font-bold text-white text-center mb-4">Investment Categories</h2>
        <p className="text-2xl text-gray-400 text-center mb-12">Explore our diverse investment opportunities</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Category 1 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/real-estate.jpg" alt="Real Estate" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Real Estate</h3>
            <p className="text-gray-300">Invest in residential and commercial properties with high returns and steady income streams.</p>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/stock-equity.jpg" alt="Stocks" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Stocks & Equity</h3>
            <p className="text-gray-300">Build wealth through carefully selected stocks and equity portfolios with growth potential.</p>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/crypto.jpg" alt="Cryptocurrency" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Cryptocurrency</h3>
            <p className="text-gray-300">Diversify into digital assets and blockchain-based investments for modern portfolio growth.</p>
            </div>

            {/* Category 4 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/bonds.webp" alt="Bonds" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Bonds & Fixed Income</h3>
            <p className="text-gray-300">Secure stable returns with government and corporate bonds for low-risk investment strategies.</p>
            </div>

            {/* Category 5 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/mutual-fund.jpg" alt="Mutual Funds" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Mutual Funds</h3>
            <p className="text-gray-300">Access professionally managed diversified portfolios tailored to your risk appetite and goals.</p>
            </div>

            {/* Category 6 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/commodities.jpg" alt="Commodities" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Commodities</h3>
            <p className="text-gray-300">Invest in gold, silver, oil and other commodities to hedge against market volatility.</p>
            </div>

            {/* Category 7 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/digital-solar.jpeg" alt="Digital Solar" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Digital Solar</h3>
            <p className="text-gray-300">Invest in digital solar.</p>
            </div>

            {/* Category 8 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/fin-instru.webp" alt="fin" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Invoice Discounting</h3>
            <p className="text-gray-300">Invest in invoice discounting.</p>
            </div>

            {/* Category 9 */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
            <img className="w-20 h-20 mb-4" src="/images/fin-instru.webp" alt="fin" />
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Other Investemens</h3>
            <p className="text-gray-300">SLB (Security Lending & Borrowing)</p>
            <p className="text-gray-300">SFT (Specialized Investment Funds)</p>
            </div>

        </div>
        </div>

        {/* Start your investment */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mt-8 mb-8">
            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Investment
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Start your investment with <u>TDF Ticker</u> & Algo Trading</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"></p>
                <ul className="mb-5 space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Investment is an art and continuous journey.</li>
                    <li>It has its own rules and luck.</li>
                    <li>Technology implementations in stock market are beyond our imagination.</li>
                </ul>
            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                    </svg>
                    Exchange
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Stock Exchanges</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
                    <ul className="mb-5 space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li><a href="https://www.nseindia.com" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" >NSE</a></li>
                        <li><a href="https://www.bseindia.com" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" >BSE</a></li>

                    </ul>
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                    </svg>
                    Analysis
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Stock analysis tools</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
                    <ul className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            <a 
                            href="https://in.tradingview.com/screener/" 
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Tradingview
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.screener.in" 
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Screener
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://pulse.zerodha.com" 
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Pulse by Zerodha
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.screener.in" 
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Coming Soon
                            </a>
                        </li>
                    </ul>
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        

        {/* Detailed Pricing Section */}
        {/* Pricing Section */}
        <div className="container mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Investment Plans</h2>
        <p className="text-xl text-gray-400 text-center mb-12">Choose the perfect plan for your investment journey</p>
        
        <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 p-4 text-sm font-medium text-white bg-gray-700 border-b border-gray-600 gap-x-8">
            <div className="flex items-center">Investment Features</div>
            <div className="text-center">Starter Plan</div>
            <div className="text-center">Growth Plan</div>
            <div className="text-center">Premium Plan</div>
            </div>

            {/* Feature Row 1 */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 border-b border-gray-700 gap-x-8">
            <div className="text-gray-400">Portfolio Management</div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            </div>

            {/* Feature Row 2 */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 border-b border-gray-700 gap-x-8">
            <div className="text-gray-400">Real-time Market Data</div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            </div>

            {/* Feature Row 3 */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 border-b border-gray-700 gap-x-8">
            <div className="text-gray-400">Advanced Analytics</div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            </div>

            {/* Feature Row 4 */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 border-b border-gray-700 gap-x-8">
            <div className="text-gray-400">Priority Support</div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            </div>

            {/* Feature Row 5 */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 border-b border-gray-700 gap-x-8">
            <div className="text-gray-400">AI-Powered Recommendations</div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            </div>

            {/* Feature Row 6 */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 border-b border-gray-700 gap-x-8">
            <div className="text-gray-400">Dedicated Account Manager</div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <svg className="w-4 h-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            </div>

            {/* Pricing Row */}
            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-300 gap-x-8 bg-gray-750">
            <div></div>
            <div>
                <a href="#" className="text-white block w-full bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">Start Free</a>
            </div>
            <div>
                <a href="#" className="text-white block w-full bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">Buy now ($49/mo)</a>
            </div>
            <div>
                <a href="#" className="text-white block w-full bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">Buy now ($99/mo)</a>
            </div>
            </div>
        </div>
        </div>


    </div>
</section>


<div id="detailed-pricing" className="w-full overflow-x-auto">
    <div className="overflow-hidden min-w-max">

    </div>
</div>



    </>
    )
}
export default Home