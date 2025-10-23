'use client';

import { useState, useEffect, useMemo } from 'react';

const NSEStocksTable = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedStock, setSelectedStock] = useState('');
  const [timeframe, setTimeframe] = useState('day');
  const [stockDetails, setStockDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // Mock NSE data - Replace this with actual NSE API call
  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      try {
        // Simulating API call with mock data
        // In production, replace with actual NSE API endpoint
        const mockData = [
          { symbol: 'RELIANCE', name: 'Reliance Industries Ltd', price: 2456.75, change: 23.45, changePercent: 0.96, volume: 5234567, marketCap: 1663234 },
          { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3678.90, change: -12.30, changePercent: -0.33, volume: 2345678, marketCap: 1345678 },
          { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1645.50, change: 15.75, changePercent: 0.97, volume: 4567890, marketCap: 987654 },
          { symbol: 'INFY', name: 'Infosys Ltd', price: 1456.25, change: -8.50, changePercent: -0.58, volume: 3456789, marketCap: 654321 },
          { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', price: 987.60, change: 5.40, changePercent: 0.55, volume: 5678901, marketCap: 765432 },
          { symbol: 'HINDUNILVR', name: 'Hindustan Unilever Ltd', price: 2567.80, change: 18.90, changePercent: 0.74, volume: 1234567, marketCap: 567890 },
          { symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd', price: 876.45, change: -3.25, changePercent: -0.37, volume: 4321098, marketCap: 456789 },
          { symbol: 'SBIN', name: 'State Bank of India', price: 567.30, change: 7.80, changePercent: 1.39, volume: 8765432, marketCap: 567123 },
          { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', price: 1789.50, change: -11.20, changePercent: -0.62, volume: 2109876, marketCap: 345678 },
          { symbol: 'LT', name: 'Larsen & Toubro Ltd', price: 3234.75, change: 28.60, changePercent: 0.89, volume: 1876543, marketCap: 456123 },
          { symbol: 'ITC', name: 'ITC Ltd', price: 432.80, change: 2.15, changePercent: 0.50, volume: 6543210, marketCap: 534567 },
          { symbol: 'AXISBANK', name: 'Axis Bank Ltd', price: 1098.90, change: -5.60, changePercent: -0.51, volume: 3210987, marketCap: 345123 },
          { symbol: 'ASIANPAINT', name: 'Asian Paints Ltd', price: 3123.40, change: 21.30, changePercent: 0.69, volume: 987654, marketCap: 298765 },
          { symbol: 'MARUTI', name: 'Maruti Suzuki India Ltd', price: 9876.55, change: -45.20, changePercent: -0.46, volume: 456789, marketCap: 298456 },
          { symbol: 'WIPRO', name: 'Wipro Ltd', price: 456.70, change: 3.90, changePercent: 0.86, volume: 5432109, marketCap: 245678 },
          { symbol: 'BAJFINANCE', name: 'Bajaj Finance Ltd', price: 6789.30, change: 67.80, changePercent: 1.01, volume: 765432, marketCap: 412345 },
          { symbol: 'HCLTECH', name: 'HCL Technologies Ltd', price: 1234.90, change: -8.70, changePercent: -0.70, volume: 2345678, marketCap: 334567 },
          { symbol: 'TITAN', name: 'Titan Company Ltd', price: 3456.20, change: 32.40, changePercent: 0.95, volume: 1234098, marketCap: 306789 },
          { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical Industries', price: 1098.75, change: 12.35, changePercent: 1.14, volume: 3456712, marketCap: 263456 },
          { symbol: 'ULTRACEMCO', name: 'UltraTech Cement Ltd', price: 8765.40, change: -23.50, changePercent: -0.27, volume: 234567, marketCap: 245123 },
        ];
        
        setTimeout(() => {
          setStocks(mockData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching stocks:', error);
        setLoading(false);
      }
    };

//     const fetchStocks = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('YOUR_NSE_API_ENDPOINT');
//       const data = await response.json();
//       setStocks(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching stocks:', error);
//       setLoading(false);
//     }
//   };

    fetchStocks();
  }, []);

  // Search functionality
  const filteredStocks = useMemo(() => {
    return stocks.filter(stock =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [stocks, searchTerm]);

  // Sort functionality
  const sortedStocks = useMemo(() => {
    const sortableStocks = [...filteredStocks];
    if (sortConfig.key !== null) {
      sortableStocks.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStocks;
  }, [filteredStocks, sortConfig]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStocks = sortedStocks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedStocks.length / itemsPerPage);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return '↕️';
    }
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  // Fetch stock details based on symbol and timeframe
  const fetchStockDetails = async () => {
    if (!selectedStock) {
      alert('Please select a stock symbol');
      return;
    }

    setDetailsLoading(true);
    try {
      // Mock data for stock details - Replace with actual NSE API
      const mockDetails = {
        day: {
          symbol: selectedStock,
          timeframe: 'Daily',
          open: 2450.30,
          high: 2478.90,
          low: 2445.60,
          close: 2456.75,
          volume: 5234567,
          avgVolume: 4890123,
          previousClose: 2433.30,
          change: 23.45,
          changePercent: 0.96,
          yearHigh: 2650.50,
          yearLow: 2100.30,
          pe: 25.4,
          eps: 96.75,
          marketCap: 1663234,
          beta: 1.15,
          dividendYield: 0.35
        },
        week: {
          symbol: selectedStock,
          timeframe: 'Weekly',
          open: 2420.50,
          high: 2490.30,
          low: 2410.20,
          close: 2456.75,
          volume: 28456789,
          avgVolume: 26789012,
          previousClose: 2420.50,
          change: 36.25,
          changePercent: 1.50,
          yearHigh: 2650.50,
          yearLow: 2100.30,
          pe: 25.4,
          eps: 96.75,
          marketCap: 1663234,
          beta: 1.15,
          dividendYield: 0.35
        },
        month: {
          symbol: selectedStock,
          timeframe: 'Monthly',
          open: 2380.90,
          high: 2510.60,
          low: 2365.40,
          close: 2456.75,
          volume: 115678901,
          avgVolume: 108901234,
          previousClose: 2380.90,
          change: 75.85,
          changePercent: 3.19,
          yearHigh: 2650.50,
          yearLow: 2100.30,
          pe: 25.4,
          eps: 96.75,
          marketCap: 1663234,
          beta: 1.15,
          dividendYield: 0.35
        },
        quarter: {
          symbol: selectedStock,
          timeframe: 'Quarterly',
          open: 2290.40,
          high: 2560.80,
          low: 2245.70,
          close: 2456.75,
          volume: 345678901,
          avgVolume: 325678901,
          previousClose: 2290.40,
          change: 166.35,
          changePercent: 7.26,
          yearHigh: 2650.50,
          yearLow: 2100.30,
          pe: 25.4,
          eps: 96.75,
          marketCap: 1663234,
          beta: 1.15,
          dividendYield: 0.35
        },
        year: {
          symbol: selectedStock,
          timeframe: 'Yearly',
          open: 2150.60,
          high: 2650.50,
          low: 2100.30,
          close: 2456.75,
          volume: 1456789012,
          avgVolume: 1345678901,
          previousClose: 2150.60,
          change: 306.15,
          changePercent: 14.23,
          yearHigh: 2650.50,
          yearLow: 2100.30,
          pe: 25.4,
          eps: 96.75,
          marketCap: 1663234,
          beta: 1.15,
          dividendYield: 0.35
        }
      };

      setTimeout(() => {
        setStockDetails(mockDetails[timeframe]);
        setDetailsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error fetching stock details:', error);
      setDetailsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading stocks data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">NSE Stocks Data</h1>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by symbol or company name..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-96 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Add Stock Details Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Stock Details Analyzer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Stock Symbol Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Stock Symbol
              </label>
              <select
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">-- Select Stock --</option>
                {stocks.map((stock) => (
                  <option key={stock.symbol} value={stock.symbol}>
                    {stock.symbol} - {stock.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeframe Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Timeframe
              </label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="quarter">Quarter</option>
                <option value="year">Year</option>
              </select>
            </div>

            {/* Analyze Button */}
            <div className="flex items-end">
              <button
                onClick={fetchStockDetails}
                disabled={detailsLoading}
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {detailsLoading ? 'Loading...' : 'Analyze Stock'}
              </button>
            </div>
          </div>

          {/* Stock Details Display */}
          {stockDetails && (
            <div className="mt-6 border-t border-gray-700 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-purple-400">
                  {stockDetails.symbol} - {stockDetails.timeframe} Analysis
                </h3>
                <button
                  onClick={() => setStockDetails(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕ Close
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* OHLC Data */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Price Data (OHLC)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Open:</span>
                      <span className="text-white font-semibold">₹{stockDetails.open.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">High:</span>
                      <span className="text-green-400 font-semibold">₹{stockDetails.high.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Low:</span>
                      <span className="text-red-400 font-semibold">₹{stockDetails.low.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Close:</span>
                      <span className="text-white font-semibold">₹{stockDetails.close.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Volume Data */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Volume & Change</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Volume:</span>
                      <span className="text-white font-semibold">{stockDetails.volume.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Volume:</span>
                      <span className="text-gray-300">{stockDetails.avgVolume.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Prev Close:</span>
                      <span className="text-gray-300">₹{stockDetails.previousClose.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Change:</span>
                      <span className={stockDetails.change >= 0 ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>
                        {stockDetails.change >= 0 ? '+' : ''}{stockDetails.change.toFixed(2)} ({stockDetails.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* 52 Week Range */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">52 Week Range</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">52W High:</span>
                      <span className="text-green-400 font-semibold">₹{stockDetails.yearHigh.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">52W Low:</span>
                      <span className="text-red-400 font-semibold">₹{stockDetails.yearLow.toFixed(2)}</span>
                    </div>
                    <div className="mt-3">
                      <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                          style={{
                            width: `${((stockDetails.close - stockDetails.yearLow) / (stockDetails.yearHigh - stockDetails.yearLow)) * 100}%`
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 text-center">
                        Current: {(((stockDetails.close - stockDetails.yearLow) / (stockDetails.yearHigh - stockDetails.yearLow)) * 100).toFixed(1)}% of range
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Market Cap:</span>
                      <span className="text-white font-semibold">₹{stockDetails.marketCap.toLocaleString('en-IN')} Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">P/E Ratio:</span>
                      <span className="text-white font-semibold">{stockDetails.pe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">EPS:</span>
                      <span className="text-white font-semibold">₹{stockDetails.eps}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Beta:</span>
                      <span className="text-white font-semibold">{stockDetails.beta}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Div Yield:</span>
                      <span className="text-white font-semibold">{stockDetails.dividendYield}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Bar */}
              <div className="mt-4 p-4 bg-gray-700 rounded-lg flex justify-between items-center">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Performance: </span>
                  {stockDetails.changePercent >= 5 && <span className="text-green-400">Strong Gain 🚀</span>}
                  {stockDetails.changePercent >= 0 && stockDetails.changePercent < 5 && <span className="text-green-400">Positive 📈</span>}
                  {stockDetails.changePercent < 0 && stockDetails.changePercent > -5 && <span className="text-red-400">Negative 📉</span>}
                  {stockDetails.changePercent <= -5 && <span className="text-red-400">Sharp Decline ⚠️</span>}
                </div>
                <div className="text-sm text-gray-400">
                  Last Updated: {new Date().toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('symbol')}
                  >
                    Symbol {getSortIcon('symbol')}
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('name')}
                  >
                    Company Name {getSortIcon('name')}
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('price')}
                  >
                    Price (₹) {getSortIcon('price')}
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('change')}
                  >
                    Change {getSortIcon('change')}
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('changePercent')}
                  >
                    Change % {getSortIcon('changePercent')}
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('volume')}
                  >
                    Volume {getSortIcon('volume')}
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-semibold text-white cursor-pointer hover:bg-gray-600"
                    onClick={() => handleSort('marketCap')}
                  >
                    Market Cap (Cr) {getSortIcon('marketCap')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {currentStocks.map((stock, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-purple-400">
                      {stock.symbol}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {stock.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-white font-semibold">
                      ₹{stock.price.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 text-sm text-right font-semibold ${
                      stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 text-sm text-right font-semibold ${
                      stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-gray-300">
                      {stock.volume.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-gray-300">
                      ₹{stock.marketCap.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-gray-700 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedStocks.length)} of {sortedStocks.length} entries
              </span>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="px-3 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-3 py-2 rounded ${
                        currentPage === pageNumber
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-white hover:bg-gray-600'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return <span key={pageNumber} className="px-2 text-gray-400">...</span>;
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
            </div>
          </div>
        </div>

        {/* No Results */}
        {currentStocks.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            No stocks found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default NSEStocksTable;