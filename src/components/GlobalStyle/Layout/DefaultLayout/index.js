import Header from "~/components/GlobalStyle/Layout/components/Header/header";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import SideBar from "./SideBar/Sidebar";

const cx = classNames.bind(style);

function DefaultLayout({children}) {
    return (
    <div className={cx('wrapper')}>
        <Header/>

        <div className={cx('container')}>
            <SideBar />
            <div className={cx('content')}>{children}</div> 
        </div>
    </div>
    )
}

export default DefaultLayout;