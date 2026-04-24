import Header from '../../components/Header/header';

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content"></div>
            </div>
        </div>
    );
}

export default HeaderOnly;