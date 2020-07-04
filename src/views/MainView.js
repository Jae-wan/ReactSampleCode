import React from 'react';
<<<<<<< HEAD
import SecondView from './SecondView';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      TryName: '',  
      TryCall: '',
    }
  }

  LocalSaveButton = () => {
    const {TryName, TryCall} = this.state;
      sessionStorage.setItem('InterfaceKey', JSON.stringify(
          { 
            UserName: TryName,
            UserCall: TryCall,
          }
        )
      )
      alert('앙');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    return (
      <main>

        <form>
          <input
            placeholder='이름'
            value={this.state.TryName}
            onChange={this.handleChange}
            name='TryName'
          />
          <input
            placeholder='전화번호'
            value={this.state.TryCall}
            onChange={this.handleChange}
            name='TryCall'
          />
        </form>

        <button onClick={this.LocalSaveButton}> LocalStorage 에 저장하기.</button>
        <li><a href='/secondview'> 2번 링크로 넘어가기. </a></li>

			</main>
=======
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
>>>>>>> 99f1916fc0a007e1136c4c82c1b0c183cbce4944
    );
  }
}

<<<<<<< HEAD
export default MainView;
=======
export default connect(mapStateToProps, mapDispatchToProps) (MainView);
>>>>>>> 99f1916fc0a007e1136c4c82c1b0c183cbce4944
