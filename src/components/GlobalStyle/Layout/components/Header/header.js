import HeaderStyles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import img from '~/assets/img';

const cx = classNames.bind(HeaderStyles);

function Header () {
    return (

        <div >
           <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}><img src={img.logo} alt="TikTok Logo" /></div>
                <div className={cx('search')}>
                    <input placeholder='Search Acounts and Videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                        {/* loading*/}
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                      <button className={cx('search-btn')}>
                       <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    </div>
            </div>
           </h2>
        </div>
    )
}

export default Header ;