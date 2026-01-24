import Swipper from './Swipper';
import MeetOurPetHeroes from './MeetOurPetHeroes';
import CategorySection from './CategorySection';
import WhyAdoptForm from './WhyAdoptForm';
import Features from './Features';
import Service from './Service';
import Highlights from './Highlights';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTA from './CTA';

const Home = () => {

    return (
        <div className='space-y-20'>
            <title>Home</title>
            
            <Swipper></Swipper>
            
            {/* Category Section */}
            <CategorySection></CategorySection>

            {/* Why Adopt from pawmart */}
            <WhyAdoptForm></WhyAdoptForm>

            {/* Meet Our Experts Vets */}
            <MeetOurPetHeroes></MeetOurPetHeroes>

            {/* Features section */}
            <Features></Features>

            {/* Services section */}
            <Service></Service>

            {/* Highlights section */}
            <Highlights></Highlights>

            {/* Stastistics section */}
            <Statistics></Statistics>

            {/* Testimonials section */}
            <Testimonials></Testimonials>

            {/* FAQ section */}
            <FAQ></FAQ>

            {/* CTA section */}
            <CTA></CTA>
        </div>
    );
};

export default Home;