import { Link, useParams } from "react-router-dom";
import { projectsData, skillData } from "../constrants/data";
import { useEffect, useState } from "react";
import { PhotoGallery } from "../components/photoGallery";
function ProjectViewer() {

    //set state 
    const [selectedProject, setSelectedProject] = useState(projectsData[0]);
    //get params
    let { name } = useParams<{ name: string }>();

    useEffect(() => {
        projectsData.map((item) => {
            if (item.name === name) {
                setSelectedProject(item);
            }
        })

    }, []);


    return (
        <div className="container my-20 p-5">

            <div className="text-center pb-40">
                <h1 className="text-5xl uppercase tracking-widest md:text-8xl">{selectedProject.name} </h1>
            </div>


            {/* project discription */}
            <div className="flex justify-between flex-col gap-32 md:flex-row">
                <div className="w-full lg:w-8/12">
                    <h1 className="text_primary ">Project Overview</h1>
                    <div className="">
                        <p className="leading-7">{selectedProject.longDesc}</p>
                        <h1 className="pt-10 pb-2.5 font-bold text-lg">Key Features</h1>
                        <div className="">
                            <ul className="list-decimal list-inside leading-7">

                                {
                                    selectedProject.keyFeatures.map((item, index) => (

                                        <li className="pb-3" key={index}>
                                            {item}
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="">
                    <div className="">
                        <h1 className="text_primary ">Tools Used</h1>
                        <div className="flex gap-5 flex-wrap">
                            {
                                selectedProject.techUsed.map((techUsed) => (

                                    skillData.map(
                                        (item, index) => {

                                            if (techUsed === item.name) {

                                                return (
                                                    <img className='w-[50px] bg-white rounded-lg p-1' key={index} src={item.icon} alt="" title={item.name} />
                                                )
                                            }

                                        }
                                    )

                                ))
                            }
                        </div>
                    </div>
                    <div className="my-20">
                        <h1 className="text_primary ">Options</h1>
                        <div className="flex justify-start gap-5">
                            {selectedProject.liveLinkAvailable && <button className=" bg-yellow-300 px-6 py-4 rounded-lg  text-black font-bold">See Live</button>}
                            {selectedProject.isGit && <button className=" bg-yellow-300 px-6 py-4 rounded-lg  text-black font-bold">Github</button>}
                            <Link to={'/'} className=" border border-yellow-300 px-10 py-4 rounded-lg  text-white font-bold">Go Back</Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* gallary */}
            <div className="mt-20">
                <h1 className="text_primary ">Photos</h1>
                <PhotoGallery slides={selectedProject.images} />

            </div>
        </div>
    )
}

export default ProjectViewer





