import React, {useState,memo} from 'react';
import { OnboardingFlow } from './OnboardingFlow';
import Profile from './Profile';
import Production from './Production';
import Success from './Success';
import Info from './Info';
import AccountType from './AccountType';

const Main = () => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex , setCurrentIndex] = useState(0);

    const onNext = stepData => {
        setOnboardingData({...onboardingData, ...stepData });
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <OnboardingFlow
            currentIndex={currentIndex}
            onNext={onNext}
        >
            <AccountType />
            <Profile />
            <Info />
            {onboardingData.age <= 17 && <Success /> }
            <Production />
        </OnboardingFlow>
    );
    
}

export default memo(Main);