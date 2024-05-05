import { skillData, experiences } from '../constrants/data';
function SkillsAndExperiences() {
    return (
        <section className="" id='skils'>

            <div className="flex flex-col gap-10 lg:flex-row lg:gap-[10em]">
                {/* Skills */}

                <div className="">
                    <h1 className="text_primary">Skills</h1>
                    <div className="flex flex-col gap-20 w-full ">
                        <Skills skillData={skillData} sectionType='Frontend' />
                        <Skills skillData={skillData} sectionType='Backend' />
                        <Skills skillData={skillData} sectionType='Tools' />
                    </div>
                </div>


                {/* works card */}
                <div className="">
                    <h1 className="text_primary">Experiences</h1>
                    <div className="max-w-[100%] lg:max-w-[100%]">
                        {/* Card */}
                        {
                            experiences.map((item, index) => {
                                return (
                                    <div className="my-20" key={index}>
                                        <div className="flex flex-col gap-5 items-start">
                                            <div className=" flex justify-between items-start">
                                                <img src={item.companyImg} alt="" className='w-[70px] rounded-full' />
                                                <div className="ml-7 sm:flex justify-between gap-10">
                                                    <div className="mb-5">
                                                        <h1 className='text-2xl font-bold'>{item.position}</h1>
                                                        <p className='text-base mt-3'>At {item.companyName}</p>
                                                        <p className='text-base'>{item.location}</p>
                                                    </div>

                                                    <div className="flex flex-col items-start gap-2 sm:items-center">
                                                        <p className='px-8 py-[5px] bg-[yellow] rounded-full text-black'>{item.jobType}</p>
                                                        <p>{item.startDate} to {item.endDate}</p>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="mt-10 flex flex-col gap-4 tracking-wider ">
                                            {
                                                item.achivementList.map((data, index) => {
                                                    return (
                                                        <p key={index} className='text-base'>- {data}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>



            </div>
        </section>
    )
}

export default SkillsAndExperiences


type Skill = {
    name: string;
    type: string;
    icon: string;
}

function Skills(
    _props: { skillData: Skill[], sectionType: string }
) {
    return (
        <div >
            <h1 className='text-xl mb-6 underline underline-offset-4 tracking-wide'>
                {_props.sectionType}
            </h1>
            <div className="flex gap-10 flex-wrap">
                {
                    _props.skillData.map(
                        (item, index) => {

                            if (_props.sectionType === item.type) {

                                return (
                                    <img className='w-[50px] bg-white rounded-lg p-1' key={index} src={item.icon} alt="" title={item.name} />
                                )
                            }

                        }
                    )

                }
            </div>

        </div>
    )
}
