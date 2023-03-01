import React from 'react';
import Personal from './Personal';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className={props.value ? 'profile' : 'display-none'}>
        {/* <Personal /> */}
        <ul className='details'>
            <li>
            • Father ’s Name : Mohanji Kanfade
            </li>
            <li>• Mother’s Name : Kavita Kanfade</li>
            <li>• Date of Birth : 22/06/1999</li>
            <li>• Hobbies and Interest: Cooking, Internet surfing , Collection of Old Coins ,Passion for Teaching Kids, Dancing, Travelling.</li>
            <li>• Blood Group : O+</li>
            <li>• Nationality : Indian</li>
            <li>• Marital Status: Unmarried</li>
            <li>• Address: Bhagat lay Out, Behind Datta Mandir, Ward no: 8 Saoner-441107.</li>
        </ul>
    </div>
  )
}

export default Profile