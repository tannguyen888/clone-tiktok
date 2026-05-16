import ClassNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = ClassNames.bind(styles);

function Button({to , href, onClick, leftIcon,rightIcon, className,children,rounded=false ,disable = false, outline= false,large= false, small =false, text= false ,primary = false, target, ...passProps }) {
    const handleClick = (e) => {
    if(disable) {
            e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') {
      onClick(e);
        }
    }
      let Comp = 'button';
      let props = {
        target,
        text,
        outline,
        disable,
        rounded,
        small,
   
        large,
        ...passProps
      }
      
      if(disable){
        Object.keys(props).forEach(key =>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
        }     })
          }
      if(to){
        props.to = to;
        Comp = Link;
      }else if(href){
        props.href = href;
        Comp = 'a';
      }else if(target === '_blank'){
        props.target = '_blank';
      }

      const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        text,
        disable,
        leftIcon,
        rightIcon,
        rounded,
        large
      });
    return (
    <Comp className={classes} {...props} onClick={handleClick}>
          {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>

    )
}



export default Button;