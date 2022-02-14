import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader />

    return (
        <div>
            <div className={classes.item}>
                <img src='https://www.technipages.com/wp-content/uploads/2019/07/Cover-600x371.jpg' alt={2}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>ava+description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;