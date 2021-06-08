import React from 'react';
import {Link} from 'react-router-dom';
import '../homepage/homepage.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const HomePage = () => (
    <div className='text-box'>
        <h1 className='heading-primary'>
        <span className='heading-primary-main'>Outdoors</span>
        <span className='heading-primary-sub'>is where life happens</span>
        </h1>
        <Link to="#">
            <CustomButton className='btn btn-white btn-animated' type="button">
                Discover our tours
            </CustomButton>
        </Link>
    </div>      
);

export default HomePage;