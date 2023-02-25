import Image from "next/image"
import logo from '../../public/logo.png'

export default function page() {
    return (
        <div className="flex justify-center bg-gray-300">
            <div className="mx-4 order-last self-center">
                <Image src={logo} alt='panaverse logo' width={80} height={80} className="rounded-full" />
            </div>
            <div className="mx-4 self-center text-center">
                <h1 className="text-6xl font-bold text-blue-700">Welcome to Panaverse</h1>
                <h2 className="text-3xl font-semibold text-blue-300">A community of Web3 and Metaverse Developers</h2>
                <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">Learn More</button>
            </div>
        </div>
    )
}
