import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionsCreators, bindActionCreators } from 'redux';
import * as UserInformationActions from '../store/user/UserInformation';

const mapStateToProps = (state) => {
  return {
    user: state.UserInformation,
  };
};

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserInformationActions, dispatch),
})

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  changeID = (e) => {
    const { userActions } = this.props;
    userActions.updateUser({
      key: 'ID',
      value: e.target.value,
    });
  };

  changeName = (e) => {
    const {userActions } = this.props;
    userActions.updateUser({
      key: 'Name',
      value: e.target.value,
    });
  };

  changeAge = (e) => {
    const {userActions} = this.props;
    userActions.updateUser({
      key: 'Age',
      value: e.target.value,
    });
  };

  OriginalConditionButton = (e) => {
    const {userActions} = this.props;
    userActions.originalUser({
      key: 'ID',
      value: e.target.value,
    })
    userActions.originalUser({
      key: 'Name',
      value: e.target.value,
    })
    userActions.originalUser({
      key: 'Age',
      value: e.target.value,
    })
  }

  render(){

      console.log(this.props.user);
      const { user } = this.props;

    return (
      <div>
        <section>
          <tag> 사용자 ID : </tag>
          <input
            type="text"
            onChange={this.changeID}
          />
        </section>

        <section>
          <tag> 이름 : </tag>
          <input
            type="text"
            onChange={this.changeName}
          />
        </section>

        <section>
          <tag> 나이 : </tag>
          <input
            type='number'
            pattern="[0-9]*"
            onChange={this.changeAge}
          />
        </section>

        <section>
          <h3> 제훈쌤의 Redux 사용하기 강좌</h3>
          변경된 유저 ID : <b>{ user.ID }</b> <br/>
          변경된 이름 : <b>{ user.Name }</b> <br/>
          변경된 나이 : <b>{ user.Age }</b> <br/>
        </section>
        <hr/>
        <section>
        <button onClick={this.OriginalConditionButton}> 초기화 버튼</button>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainView);
