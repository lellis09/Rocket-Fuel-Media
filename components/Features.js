import React from "react";
import ContentFeat from "./ContentFeat"

const Feature = () => {
    return(
        <main>
            <section>
                <h3 className="text-center font-bold uppercase">What We Offer</h3>
                <h5 className="text-3xl pb-6 max-w-lg mx-auto text-center">Where Strategy Meets Digital. Your Success Begins with DigiMax</h5>
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
            </section>
            <section>

            </section >
            <div className="py-6 flex justify-center">
                <button className="w-40 bg-blue-500 p-2 rounded-full">Learn More</button>
            </div>
            
        </main>
    )
}

export default Feature