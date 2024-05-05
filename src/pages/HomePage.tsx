import Background from "./Background";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import SkillsAndExperiences from "./SkillsAndExperiences";
import TalkToMe from "./TalkToMe";




function HomePage() {
    return (
        <>
            <div className="container pt-6 px-4 sm:px-0">
                <Hero />
                <Background />
                <SkillsAndExperiences />
                <Projects />
                <Education />
            </div>
            <TalkToMe />
        </>

    )
}

export default HomePage;