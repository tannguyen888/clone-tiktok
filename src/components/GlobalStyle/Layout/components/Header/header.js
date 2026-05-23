import HeaderStyles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faSignIn, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import img from '~/assets/img';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import Button from '../button/Button';
import { Wrapper as PopperWrapper } from '../popper';
import AccountItem from '../AccountItems/AccountItem';
import Menu from '../popper/Menu';
import Image from '../Image';

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
  const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

function Header () {
    const currentUser = true; // This should be replaced with actual user authentication logic
    const [showSearchResult, setShowSearchResult] = useState(false);

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            setShowSearchResult(true);
        }
    };
 
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                console.log('Language changed to:', menuItem.code);
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={img.logo} alt="TikTok Logo" />
                </div>

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
                        )}
                    >
                        <input
                            placeholder='Search Acounts and Videos'
                            spellCheck={false}
                            onKeyDown={handleSearchKeyDown}
                        />
                    </Tippy>

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <><button>
                            <FontAwesomeIcon icon={faCloudUpload} />
                        </button><button>
                                <FontAwesomeIcon icon={faMessage} />
                            </button></>
                       ) :(
                    <><Button text>Upload</Button><Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log In</Button></>
                    )}


                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>

                        {currentUser ?(
                        <Image className={cx('user-avatar')} alt="Nguyen Van A" src="https://files.f8.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png" />):(
                       
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                         )}
                    </Menu>



                </div>
            </div>
        </header>
    );
}

export default Header;