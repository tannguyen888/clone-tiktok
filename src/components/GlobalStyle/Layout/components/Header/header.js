import HeaderStyles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import img from '~/assets/img';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../button';

const cx = classNames.bind(HeaderStyles);

function Header () {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 3000);
    }, []);


    return (

        <div >
           <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}><img src={img.logo} alt="TikTok Logo" /></div>
                <div className={cx('search')}>
                     <Tippy
                     visible={searchResult.length > 0}
                      render={attr => (
                        <div className={cx('search-result')} tabIndex="-1" {...attr}>
                           ket qua
                        </div>
                    )

                    }> 
                    <input placeholder='Search Acounts and Videos' spellCheck={false}/>
                    </Tippy>
                    <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                        {/* loading*/}
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                   
                        <button className={cx('search-btn')}>
                       <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                   
                     
                    </div>
                    <div className={cx('action')}>
                         <Button text>Upload</Button>
                        <Button primary leftIcon={ <FontAwesomeIcon icon={faSignIn} />} >Log In</Button>
                       
                    </div>
            </div>
           </h2>
        </div>
    )
}

export default Header ;