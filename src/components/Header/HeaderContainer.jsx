import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reduser";
import {meAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        meAPI.getMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, login, email} = response.data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);