import { DebitCard } from "./cards/DebitCard"

export const CenterSection = () => {
    return(
        <>
        <section className="w-1/2">
            <div className=" flex rounded-md overflow-hidden bg-gray-600 p-2 items-center ">
             <input type="text" className=" p-2 w-1/2 bg-gray-600" placeholder="Search"/>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

             </div>
             <DebitCard/>
        </section>
       
        </>
    )
}