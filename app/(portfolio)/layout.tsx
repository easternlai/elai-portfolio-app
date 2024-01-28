import { Header } from "./_components/header"

const PortfolioLayout = ({ children }: { children: any }) => {

    return (
        <div className="mx-96 px-12 pt-12">
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default PortfolioLayout