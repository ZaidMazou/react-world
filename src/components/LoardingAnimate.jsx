import React from 'react';

const LoardingAnimate = () => {
    return (
        <div className="w-[100vw] h-[100vh] bg-[#ffffff35] fixed inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-[3px] border-b-[3px] border-purple-500"></div>
        </div>
    );
};

export default LoardingAnimate;