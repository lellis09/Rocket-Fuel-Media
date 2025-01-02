import React from "react";
import ContentFeat from "./ContentFeat"
import ButtonA from "../users/ButtonA";

const In_Features = () => {
    return(
        <main className="py-6">
            <section>
                <h3 className="text-center font-bold uppercase">What We Offer</h3>
                <h5 className="text-3xl pb-6 max-w-lg mx-auto text-center">Where Strategy Meets Digital. Your Success Begins with DigiMax</h5>
                <div className="flex flex-col gap-y-6">
                    <section className="feat-cont flex-col flex sm:flex-row gap-x-4 px-4 md:justify-center ">
                    <div className="border-2 border-black">
                        <ContentFeat />
                    </div>
                    <div className="border-2 border-black">
                        <ContentFeat />
                    </div>
                    <div className="border-2 border-black">
                        <ContentFeat />
                    </div>
                    </section>
                    <section className="feat-cont flex-col flex sm:flex-row gap-x-4 px-4 md:justify-center ">
                    <div className="border-2 border-black">
                        <ContentFeat />
                    </div>
                    <div className="border-2 border-black">
                        <ContentFeat />
                    </div>
                    <div className="border-2 border-black">
                        <ContentFeat />
                    </div>
                    </section>
                </div>
                
            </section>
            <section>

            </section >
            <div className="flex justify-center">
            <ButtonA />
            </div>
        
            
        </main>
    )
}

export default In_Features