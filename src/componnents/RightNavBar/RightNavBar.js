import './RightNavBar.css';
import hot from '../../assets/images/hot.png';
import new_content from '../../assets/images/new_content.png';
import top from '../../assets/images/top.png';
import rising from '../../assets/images/rising.png';

export const RightNavBar = () => {

    return (
        <div className='rightNavBar'>
            <ul>
                <li>
                    <a href="#">
                        <img src={hot} alt='Hot Content' />Hot
                    </a>
                </li>
                <li><a href="https://www.reddit.com/r/popular/new/" target="_blank" rel='noreferrer'><img src={new_content} alt='New Content' />New</a></li>
                <li><a href="#"><img src={top} alt='Top Content' />Top</a></li>
                <li><a href="#"><img src={rising} alt='Rising Content'/>Rising</a></li>
            </ul>
        </div>
    )
}