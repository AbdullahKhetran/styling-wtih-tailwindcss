import Image from "next/image"
import logo from '../../public/logo.png'

export default function page() {
    return (
        <div className="flex justify-center bg-gray-300">
            <div className="mx-4 order-last">
                <Image src={logo} alt='panaverse logo' width={80} height={80} />
            </div>
            <div className="mx-4 self-center">
                <h1>Welcome to Panaverse</h1>
                <h2>A community of Web3 and Metaverse Developers</h2>
                <button>Learn More</button>
            </div>
        </div>
    )
}
