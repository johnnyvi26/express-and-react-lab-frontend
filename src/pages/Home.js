import resumepdf from '../img/Villavicencio-Johnny-Resume.pdf';
import resumepic from '../img/resumepic.png';

function Resume(props) {
    return (
        <div>
           <br />
           <br />
           <br />
           <img src={resumepic} alt='resumepic' className='resume' /><br/>
           <a href={resumepdf}>resume</a>
        </div>
    );

}

export default Resume;