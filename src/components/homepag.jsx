import { BigCardRight } from "./cards/bigCardRight"
import { CardInvest } from "./cards/cardinvest"
import { SmallCardRight } from "./cards/SmallCardRight"
import { CenterSection } from "./centerSection"
import { FirstCard } from "./leftside/firstCard"
import { ThirdCard } from "./leftside/thirdCard"

export const HomePage = () => {
    return(

        <>
        <div className="flex justify-between">
            <div className="flex flex-col w-1/4">
           <FirstCard/>
           <ThirdCard/>
           </div>

            <CenterSection/>
            <div className="flex flex-col gap-4">
            <CardInvest/>
            <SmallCardRight/>
            <BigCardRight/>
            </div>
            

        </div>

        </>
    )}