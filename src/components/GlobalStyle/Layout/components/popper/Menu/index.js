import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '..';
import MenuItems from './MenuItems';
import Headers from './Header';
import { useState } from 'react';
const cx = classNames.bind(Styles);
const defaultFn = () => {};
function Menu({children, items = [], onChange = defaultFn}) {
     const [history, setHistory] = useState([{data: items}]);
     const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
                const isParent = !!item.children;
                return <MenuItems key={index} data={item} onClick={() =>{
                    if(isParent){
                        setHistory(prev => [...prev, item.children]);
                    }else{
                        if (typeof onChange === 'function') {
                            onChange(item);
                        }
                    }
                }} />;
        });
    };

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1));
    };

    return (   <Tippy 
                            interactive
                            placement='bottom-end'
                            render={attr => (
                                <div className ={cx('content')} tabIndex="-1" {...attr}>
                                    <PopperWrapper> 
                                        {history.length > 1 && (
                                            <Headers title={current.title} onBack={handleBack}/>
                                        )}
                                      {renderItems()}
                                    </PopperWrapper>
                                </div>
                            )}
                        >  
                        {children}
                       </Tippy> );
}

export default Menu;