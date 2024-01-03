import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

export const Sidebar = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
            <div className="fade-in fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm" />
            <nav
                //todo: efecto slide 
                className="fixed p-5 right-0 top-0 w-4/5 sm:w-1/3 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">
                <IoCloseOutline size={30} className='absolute top-5 right-5 cursor-pointer' />
                <div className="block sm:hidden relative mt-14">
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input type="text" placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border text-xl border-gray-200 focus:outline-none focus:border-gray-500" />
                </div>
                <Link href={'/'} className="flex items-center mt-7 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoPersonOutline size={20} />
                    <span className="ml-3 text-xl">Perfil</span>
                </Link>
                <Link href={'/'} className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogInOutline size={20} />
                    <span className="ml-3 text-xl">Ingresar</span>
                </Link>
                <Link href={'/'} className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogOutOutline size={20} />
                    <span className="ml-3 text-xl">Cerrar sesion</span>
                </Link>

                <div className="w-full h-px bg-gray-200 my-10" />

                <Link href={'/'} className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoShirtOutline size={20} />
                    <span className="ml-3 text-xl">Productos</span>
                </Link>
                <Link href={'/'} className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoTicketOutline size={20} />
                    <span className="ml-3 text-xl">Ordenes</span>
                </Link>
                <Link href={'/'} className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoPeopleOutline size={20} />
                    <span className="ml-3 text-xl">Usuarios</span>
                </Link>
            </nav>
        </div>
    )
}
