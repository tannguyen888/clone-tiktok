import Button from '../../button/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItems ({data, onClick}) {
        const classes = cx('menu-item', {
        separate: data.separate,
    });
    return ( 
        <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
    );
}
MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};


export default MenuItems;