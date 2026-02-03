import { Hero } from '../components/Hero/Hero';
import { PersonalNote } from '../components/Sections/PersonalNote';
import { ValueBoxes } from '../components/Sections/ValueBoxes';
import { Roadmap } from '../components/Sections/Roadmap';
import { AvatarProfiles } from '../components/Sections/AvatarProfiles';
import { FAQ } from '../components/Sections/FAQ';

export const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <PersonalNote />
            <ValueBoxes />
            <Roadmap />
            <AvatarProfiles />
            <FAQ />
            {/* Background elements specific to Home could go here */}
        </div>
    );
};
