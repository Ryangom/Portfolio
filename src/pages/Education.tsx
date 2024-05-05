
import Lottie from "lottie-react"
import education from "../assets/education.json"

import { educationData } from "../constrants/data"

function Education() {
    return (
        <section className="mb-52" id="education">
            <h1 className="text_primary">Education</h1>

            <div className="flex justify-between items-center">
                <div className="hidden w-[30%] lg:block">
                    <Lottie animationData={education} />
                </div>
                <div className="w-[100%] lg:w-[55%] ">

                    {
                        educationData.map((item, index) => {
                            return (

                                <div className="flex flex-col mb-5 " key={index}>
                                    <div className="flex items-start">
                                        <img className="w-[10%] h-auto rounded-full" src={item.img} alt="" />
                                        <div className="px-4">
                                            <h1 className="text-xl leading-10 font-bold tracking-wide">{item.name}</h1>
                                            <p className="text-lg ">{item.desc}</p>
                                            <p className="mb-2">Started: <strong>{item.startDate}</strong> & Graduated: <strong>{item.endDate}</strong></p>
                                            <p>
                                                <strong className="underline underline-offset-4">{item.result}</strong>
                                            </p>
                                            <p className="text-base mt-4">
                                                -Relevent courses :
                                                {
                                                    item.courses.map((item, index) => <span key={index} className="" > {item}</span>)
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>

    )
}

export default Education