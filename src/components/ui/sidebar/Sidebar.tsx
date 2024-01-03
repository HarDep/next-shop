
export const Sidebar = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
            <div className="fade-in fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm" />
            <nav
                //todo: efecto slide 
                className="fixed p-5 right-0 top-0 w-2/3 sm:w-1/3 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">

            </nav>
        </div>
    )
}
