import Swipper from './Swipper';
import MeetOurPetHeroes from './MeetOurPetHeroes';
import CategorySection from './CategorySection';
import WhyAdoptForm from './WhyAdoptForm';

const Home = () => {

    return (
        <div className='space-y-30'>
            <title>Home</title>
            
            <Swipper></Swipper>
            
            {/* Category Section */}
            <CategorySection></CategorySection>

            {/* Why Adopt from pawmart */}
            <WhyAdoptForm></WhyAdoptForm>

            {/* Meet Our Experts Vets */}
            <MeetOurPetHeroes></MeetOurPetHeroes>
        </div>
    );
};

export default Home;