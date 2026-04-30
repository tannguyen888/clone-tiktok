import HeaderStyles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(HeaderStyles);

function Header () {
    return (

        <div >
           <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                
            </div>
           </h2>
        </div>
    )
}

export default Header ;