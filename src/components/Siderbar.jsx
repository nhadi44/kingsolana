export const Sidebar = () => {
    return (
        <div>
            <div className="absolute z-10 flex flex-col bottom-0 my-10 justify-end mx-10">
                <div className="group flex items-center my-10">
                    <a href="/" target="_blank" rel="noopener noreferrer" className=" ">
                        <span className="group-hover:bg-white group-hover:text-red-500 mx-4 p-5 transition duration-200 text-[40px] rounded-sm text-white">
                            <i class="fa-brands fa-twitter"></i>
                        </span>
                    </a>
                    <p className="mx-10 translate-x-0 text-white font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-700">Twitter</p>
                </div>
                <div className="group flex items-center my-10">
                    <a href="/" target="_blank" rel="noopener noreferrer" className=" ">
                        <span className="group-hover:bg-white group-hover:text-red-500 mx-4 p-5 transition duration-200 text-[40px] rounded-sm text-white">
                            <i class="fa-brands fa-telegram"></i>
                        </span>
                    </a>
                    <p className="mx-10 translate-x-0 text-white font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-700">Telegram</p>
                </div>
                <div className="group flex items-center my-10">
                    <a href="/" target="_blank" rel="noopener noreferrer" className=" ">
                        <span className="group-hover:bg-white group-hover:text-red-500 mx-4 p-5 transition duration-200 text-[40px] rounded-sm text-white">
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                    </a>
                    <p className="mx-10 translate-x-0 text-white font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-700">Instagram</p>
                </div>
                <div className="group flex items-center my-10">
                    <a href="/" target="_blank" rel="noopener noreferrer" className=" ">
                        <span className="group-hover:bg-white group-hover:text-red-500 mx-4 p-5 transition duration-200 text-[35px] rounded-sm text-white">
                            <i class="fa-brands fa-discord"></i>
                        </span>
                    </a>
                    <p className="mx-10 translate-x-0 text-white font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-700">Discord</p>
                </div>
            </div>
        </div >
    )
}