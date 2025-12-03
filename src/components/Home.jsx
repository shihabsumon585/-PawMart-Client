
import Swipper from './Swipper';
import ServicesCard from './ServicesCard';
import { Link } from 'react-router';
import TipsCare from './TipsCare';
import MeetOurExpertVets from './MeetOurExpertVets';
import PatientFeedback from './PatientFeedback';
import CategorySection from './CategorySection';

const Home = () => {

    return (
        <div className='space-y-30'>
            <title>Home</title>
            <Swipper></Swipper>
            
            {/* Category Section */}
            <CategorySection></CategorySection>            

            {/* Pets Care Tips section */}
            <TipsCare></TipsCare>

            {/* Meet Our Experts Vets */}
            <MeetOurExpertVets></MeetOurExpertVets>

            {/* Patient Feedback */}
            <PatientFeedback></PatientFeedback>
        </div>
    );
};

export default Home;