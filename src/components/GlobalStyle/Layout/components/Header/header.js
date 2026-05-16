import HeaderStyles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import img from '~/assets/img';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Children, useState } from 'react';
import { useEffect } from 'react';
import Button from '../button/Button';
import { Wrapper as PopperWrapper } from '../popper';
import AccountItem from '../AccountItems/AccountItem';
import Menu from '../popper/Menu';
import MenuItems from '../popper/Menu/MenuItems';

const cx = classNames.bind(HeaderStyles);

const MENU_ITEMS = [
  
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
       children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to:'/feedback'

    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
       

    }
]

function Header () {
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            setShowSearchResult(true);
            setSearchResult([1,2,3]);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 3000);
    }, []);
 
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                // Handle change language
                console.log('Language changed to:', menuItem.code);
                break;
            default:
        }
    };


    return (

        <div >
           <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}><img src={img.logo} alt="TikTok Logo" /></div>
                <div className={cx('search')}>
                     <Tippy
                     visible={showSearchResult}
                      render={attr => (
                        <div className={cx('search-result')} tabIndex="-1" {...attr}>
                           <PopperWrapper>
                                <AccountItem data={{ nickname: 'user1', full_name: 'User One', avatar: '', tick: false }} />
                                <AccountItem data={{ nickname: 'user2', full_name: 'User Two', avatar: '', tick: false }} />
                                <AccountItem data={{ nickname: 'user3', full_name: 'User Three', avatar: '', tick: false }} />
                           </PopperWrapper>
                        </div>
                    )

                    }> 
                    <input placeholder='Search Acounts and Videos' spellCheck={false} onKeyDown={handleSearchKeyDown}/>
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
                     <Menu items={MENU_ITEMS} onChange={handleMenuChange} >
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                          
                        </button>
                     </Menu>
                    </div>
            </div>
           </h2>
        </div>
    )
}

export default Header ;