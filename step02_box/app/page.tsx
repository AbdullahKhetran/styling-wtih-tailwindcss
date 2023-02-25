// import Image from "next/image"
// import logo from '../public/logo.png'

export default function Page() {
  return (
    <div>
      <div> Margins, Paddings and Borders</div>
      <div className="mt-20 mb-10">
        <button className="p-10 border border-black">One</button>
        <button className="m-10 border border-black">Two</button>
        <button className="m-2 p-2 border-4 border-black">Three</button>
      </div>
      <div>
        <button className="m-4 p-4 border-2 border-black rounded-md">Four</button>
        <button className="m-4 p-4 border-2 border-black rounded-2xl">Five</button>
        <button className="m-4 p-4 border-2 border-black rounded-full">Six</button>
      </div>
    </div>
  )
}
