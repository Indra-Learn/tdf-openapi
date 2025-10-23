export const NAV_ITEMS = [
    // { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
    { href: '/strategies', label: 'Strategies' },
    { href: '/algotrading', label: 'Algo Trading' },
]

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
// {
//           "allow_symbol_change": true,
//           "calendar": false,
//           "details": false,
//           "hide_side_toolbar": true,
//           "hide_top_toolbar": false,
//           "hide_legend": false,
//           "hide_volume": false,
//           "hotlist": false,
//           "interval": "D",
//           "locale": "en",
//           "save_image": true,
//           "style": "1",
//           "symbol": "NASDAQ:AAPL",
//           "theme": "dark",
//           "timezone": "Etc/UTC",
//           "backgroundColor": "#0F0F0F",
//           "gridColor": "rgba(242, 242, 242, 0.06)",
//           "watchlist": [],
//           "withdateranges": false,
//           "compareSymbols": [],
//           "studies": [],
//           "autosize": true
// }
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    locale: 'en', // language
    largeChartUrl: '', // link to a large chart if needed
    isTransparent: true, // makes background transparent
    showFloatingTooltip: true, // show tooltip on hover
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    scaleFontColor: '#DBDBDB', // font color for scale
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    tabs: [
        // {
        //     title: 'INDICES',
        //     symbols: [
        //         { s: '', d: '' },
        //     ],
        // },
        {
            title: 'Sensex',
            symbols: [
                { s: 'BSE:RELIANCE', d: 'Reliance Industries' },
                { s: 'BSE:HDFCBANK', d: 'HDFC Bank' },
                { s: 'BSE:BHARTIARTL', d: 'Bharti Airtel Limited' },
                { s: 'BSE:TCS', d: 'TCS' },
                { s: 'BSE:ICICIBANK', d: 'ICICI Bank' },
                { s: 'BSE:SBIN', d: 'SBI Bank' },
                { s: 'BSE:BAJFINANCE', d: 'Bajaj Finance Limited' },
                { s: 'BSE:INFY', d: 'Infosys Limited' },
                { s: 'BSE:HINDUNILVR', d: 'Hindustan Unilever Limited' },
                { s: 'BSE:LT', d: 'Larsen & Toubro Limited' },
                { s: 'BSE:MARUTI', d: 'Maruti Suzuki India Limited' },
                { s: 'BSE:ITC', d: 'ITC Limited' },
                { s: 'BSE:M_M', d: 'Mahindra & Mahindra Limited' },
                { s: 'BSE:KOTAKBANK', d: 'Kotak Mahindra Bank' },
                { s: 'BSE:HCLTECH', d: 'HCL Technologies Limited' },
                { s: 'BSE:SUNPHARMA', d: 'Sun Pharma' },
                { s: 'BSE:AXISBANK', d: 'AXIS Bank' },
                { s: 'BSE:ULTRACEMCO', d: 'UltraTech Cement' },
                { s: 'BSE:ETERNAL', d: 'Eternal Limited' },
                { s: 'BSE:BAJAJFINSV', d: 'Bajaj Dinserv Limited' },
                { s: 'BSE:NTPC', d: 'NTPC Limited' },
                { s: 'BSE:TITAN', d: 'Titan Company Limited' },
                { s: 'BSE:ADANIPORTS', d: 'Adani Ports & SEZ' },
                { s: 'BSE:POWERGRID', d: 'Power Grid'},
                { s: 'BSE:NESTLEIND', d: 'Nestle India Ltd.' },
                { s: 'BSE:ASIANPAINT', d: 'Asian Paints Ltd.' },
                { s: 'BSE:TATASTEEL', d: 'Tata Steel' },
                { s: 'BSE:TATAMOTORS', d: 'Tata Motors' },
                { s: 'BSE:TECHM', d: 'Tech Mahindra Limited' },
                { s: 'BSE:INDUSINDBK', d: 'IndusInd Bank Ltd.' },
            ],
        },
        {
            title: 'India ETFs',
            symbols: [
                { s: 'BSE:NIFTYIETF', d: 'ICICI Prudential Nifty 50 ETF' },
                { s: 'BSE:NEXT50', d: 'Mirae Asset Nifty Next 50 ETF' },
                { s: 'BSE:BANKIETF', d: 'ICICI Prudential Nifty Bank ETF' },
                { s: 'BSE:MIDQ50ADD', d: 'DSP Nifty Midcap 150 Quality 50 ETF' },
                { s: 'BSE:HDFCSML250', d: 'HDFC Nifty Smallcap 250 ETF' },
                { s: 'NSE:GROWWRAIL', d: 'Groww Nifty India Railways PSU ETF' },
                { s: 'BSE:AUTOIETF', d: 'ICICI Prudential Nifty Auto ETF' },
                { s: 'BSE:CONSUMIETF', d: 'ICICI Prudential Nifty India Consumption ETF' },
                { s: 'BSE:HEALTHIETF', d: 'ICICI Prudential Nifty Healthcare ETF' },
                { s: 'NSE:MODEFENCE', d: 'Motilal Oswal Nifty India Defence ETF' },
                { s: 'BSE:METAL', d: 'Mirae Asset Nifty Metal ETF' },
                { s: 'BSE:HNGSNGBEES', d: 'Nippon India ETF Hang Seng BeES' },
                { s: 'BSE:MON100', d: 'Motilal Oswal NASDAQ 100 ETF' },
                { s: 'BSE:SILVER', d: 'Aditya Birla Sunlife Silver ETF' },
                { s: 'BSE:GOLDBEES', d: 'Nippon India ETF Gold BeES' },
            ],
        },
        {
            title: 'Global Markets',
            symbols: [
                { s: 'NASDAQ:AMZN', d: 'Amazon' },
                { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },
                { s: 'NYSE:T', d: 'At&t Inc' },
                { s: 'NYSE:WMT', d: 'Walmart' },
                { s: 'NYSE:V', d: 'Visa' },
            ],
        },
    ],
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SENSEX',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: true,
    isDataSetEnabled: true,
    isZoomEnabled: false,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Long-Term Equity',
            symbols: [
                { name: 'BSE:BAJAJHLDNG', displayName: 'Bajaj Holdings & Investment Limited' },
                { name: 'BSE:INDIGO', displayName: 'Interglove Aviation Ltd.' },
                { name: 'BSE:MARUTI', displayName: 'Maruti Suzuki India Limited' },
                { name: 'BSE:TATAMOTORS', displayName: 'Tata Motors Limited' },
                { name: 'BSE:MCX', displayName: 'Multi Commodity Exchange of India Limited' },
                { name: 'BSE:BHARTIARTL', displayName: 'Bharti Airtel Limited' },
                { name: 'BSE:TVSMOTOR', displayName: 'TVS Motor Company Limited' },
                { name: 'BSE:TATAPOWER', displayName: 'Tata Power Company Limited' },
                { name: 'BSE:AXISBANK', displayName: 'Axis Bank'},
                { name: 'BSE:RELIANCE', displayName: 'Reliance Industries Limited' },
                { name: 'BSE:LT', displayName: 'Larsen & Toubro Limited' },
                { name: 'BSE:NTPC', displayName: 'NTPC Limited' },
                { name: 'BSE:EICHERMOT', displayName: 'Eicher Motors Limited' },
                { name: 'BSE:WAAREEENER', displayName: 'WAAREE Energies Limited' },
                { name: 'BSE:MOTILALOFS', displayName: 'Motilal Oswal Financial Services Limited' },
                { name: 'BSE:GODREJIND', displayName: 'Godrej Industries Limited' },
                { name: 'BSE:IOC', displayName: 'Indian Oil Corporation Limited' },
                { name: 'BSE:ARE_M', displayName: 'Amara Raja Energy & Mobility Ltd' },
                { name: 'BSE:IREDA', displayName: 'Indian Renewable Energy Development Agency Ltd.' },
                { name: 'BSE:TATACONSUM', displayName: 'Tata Consumer Products Limited' },
                { name: 'BSE:LICI', displayName: 'Life Insurance Corporation of India' },
                { name: 'BSE:MINDSPACE', displayName: 'MINDSPACE Business Parks REIT' },
                { name: 'BSE:EMBASSY', displayName: 'Embassy Office Parks REIT' },
                { name: 'BSE:JIOFIN', displayName: 'Jio Financial Services Limited' },
                { name: 'BSE:UNITDSPR', displayName: 'United Spirits Limited' },
                { name: 'BSE:INDHOTEL', displayName: 'Indian Hotels Company Limited' },
            ],
        },
        {
            name: 'Short-Term Equity',
            symbols: [
                { name: 'NSE:BSE', displayName: 'Bombay Stock Exchange' },
                { name: 'BSE:ABB', displayName: 'ABB India Limited' },
                { name: 'BSE:COALINDIA', displayName: 'Coal India Ltd.' },
                { name: 'BSE:HINDUNILVR', displayName: 'Hindustan Unilever Limited' },
                { name: 'BSE:SIEMENS', displayName: 'Siemens Limited' },
                { name: 'BSE:ENRIN', displayName: 'Siemens Energy India Limited' },
                { name: 'BSE:YESBANK', displayName: 'Yes Bank' },
                { name: 'BSE:TIMETECHNO', displayName: 'Time Technoplast Limited' },
                { name: 'BSE:IEX', displayName: 'Indian Energy Exchange' },
            ],
        },
        {
            name: 'ETF',
            symbols: [
                { name: 'BSE:SETFNIFBK', displayName: 'SBI ETF Nifty Bank' },
                { name: 'BSE:NEXT50', displayName: 'Mirae Asset Nifty Next 50 ETF' },
                { name: 'NSE:CONSUMBEES', displayName: 'Nipppon India ETF Nifty India Consumption' },
                { name: 'BSE:HDFCSML250', displayName: 'HDFC Nifty Smallcap 250 ETF' },
                { name: 'BSE:NIFTYBEES', displayName: 'Nippon India ETF Nifty 50 BeES' },
                { name: 'NSE:SETFNN50', displayName: 'SBI-ETF Nifty Next 50' },
                { name: 'BSE:SILVER', displayName: 'Aditya Birla Sun Life Silver ETF' },
                { name: 'BSE:GOLDBEES', displayName: 'Nippon India ETF Gold BeES' },
                { name: 'BSE:JUNIORBEES', displayName: 'Nippon India ETF Nifty Next 50 Junior BeES' },
                { name: 'NSE:MIDCAPETF', displayName: 'Mirae Asset Nifty Midcap 150 ETF' },
                { name: 'NSE:MODEFENCE', displayName: 'Motilal Oswal Nifty India Defence  ETF' },
                { name: 'BSE:SMALLCAP', displayName: 'Mirae Asset Nifty Smallcap 250 Momentum Quality 100 ETF' },
                { name: 'NSE:METALIETF', displayName: 'ICICI Prudential Nifty Metal ETF' },
                { name: 'BSE:MON100', displayName: 'Motilal Oswal NASDAQ 100 ETF' },
                { name: 'BSE:MOHEALTH', displayName: 'Motilal Oswal S&P BSE Healthcare ETF' },
            ],
        },
    ],
};

export const MARKET_HOTLIST_WIDGET_CONFIG = {
    exchange: "BSE",
    colorTheme: "dark",
    dateRange: "12M",
    showChart: true,
    locale: "en",
    largeChartUrl: "",
    isTransparent: false,
    showSymbolLogo: false,
    showFloatingTooltip: false,
    plotLineColorGrowing: "rgba(41, 98, 255, 1)",
    plotLineColorFalling: "rgba(41, 98, 255, 1)",
    gridLineColor: "rgba(240, 243, 250, 0)",
    scaleFontColor: "#DBDBDB",
    belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
    belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
    belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
    belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
    symbolActiveColor: "rgba(41, 98, 255, 0.12)",
    width: "100%",
    height: "600"
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'AAPL',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'META',
    'NVDA',
    'NFLX',
    'ORCL',
    'CRM',

    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',

    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',

    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',

    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE',
];

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];