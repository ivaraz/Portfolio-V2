import Foto from "/assets/photos/rifapng.png";

export default function HomeLayout() {
    return (
        <div className="w-full min-h-screen bg-[url('/assets/photos/bg-1.jpg')]">
            <img src={Foto} alt="orangganteng" className="lg:w-[45rem] w-[60rem] z-0 overflow-hidden absolute top-[45%] lg:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <div className="flex flex-col justify-center items-center absolute top-[70%] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-52 z-50">
                <p className="lg:text-white text-xl font-semibold">Hello!! I'm</p>
                <h1 className="lg:text-white text-center font-semibold italic">Muhammad <span className="text-red-600">Rifa</span> Maulana <span className="text-red-600">Aziz</span></h1>
                <h5 className="p-3 rounded-sm text-base lg:text-red-600 font-semibold">Informatics Student | IT Enthusiast</h5>
            </div>
        </div>
    )
}