import React, {Component} from 'react';

const ThirdView = () => {

    const item = JSON.parse(localStorage.getItem('InterfaceKey'));

    return(
        <article>
            <section>
                      {item.UserName}, {item.UserCall}      
            </section>
            <hr/>
        </article>
    )

}

export default ThirdView;