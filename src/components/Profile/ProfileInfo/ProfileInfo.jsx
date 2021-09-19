import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.technipages.com/wp-content/uploads/2019/07/Cover-600x371.jpg' alt={2}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;