import React, {Component} from 'react';
import MainView from './MainView';

const SecondView = () => {

    const item = JSON.parse(sessionStorage.getItem('InterfaceKey'));

    return(
        <article>
            <section>
                      {item.UserName}, {item.UserCall}      
            </section>

            <hr/>

            <li><a href='/thirdview'> 3번 링크로 넘어가기. </a></li>

        </article>
    )

}

export default SecondView;