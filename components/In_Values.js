import React from "react";
import ContentFeat from "./ContentFeat";
import Image from "next/image";
import laptopPic from '../public/laptopPic.jpg'

const In_Values = () => {
    return(
        <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 border-4 border-green-300 relative max-h-[700px] h-[400px] lg:h-[500px] ">
                <section className="">
                    <Image 
                        src={laptopPic}
                        alt="Laptop picture"
                        layout="fill"
                        // width={16}
                        // height={9}
                        className="object-cover w-full "
                        />
                </section>
                <section className="absolute inset-0 z-20 flex flex-col justify-center items-center ">
                    <h3 className="text-center font-bold uppercase text-white">What We Offer</h3>
                    <h5 className="text-3xl pb-6 max-w-lg mx-auto text-center text-white">Where Strategy Meets Digital. Your Success Begins with DigiMax</h5>
                </section>
                
            </div>
            <div className="w-full lg:w-1/3 flex lg:flex-col lg:h-[500px]">
                <section className="border-4 border-pink-700 w-1/2 lg:w-full lg:h-1/2 flex justify-center">
                    <ContentFeat />
                </section>
                <section className="border-4 border-pink-700 w-1/2 lg:w-full lg:h-1/2 flex justify-center">
                    <ContentFeat />
                </section>
            </div>
            
        </main>
    )
}

export default In_Values