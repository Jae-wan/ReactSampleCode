import React from 'react';
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
    );
  }
}

export default MainView;