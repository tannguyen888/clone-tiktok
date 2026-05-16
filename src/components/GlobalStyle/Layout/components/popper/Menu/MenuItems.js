import Button from '../../button/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItems ({data, onClick}) {
    return ( 
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
    );
}

export default MenuItems;