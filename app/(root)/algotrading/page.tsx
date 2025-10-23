import NSEStocksTable from "@/components/NSEStocksTable";

const AlgoTrading = () => {
    return (
        <div className="flex min-h-screen home-wrapper">
            <section className="grid w-full gap-8 home-section">
                <div className="h-full md:col-span-1 xl:col-span-3">
                    <h1>Algo Trading</h1>
                    <NSEStocksTable />
                </div>
            </section>
        </div>
    )
}

export default AlgoTrading