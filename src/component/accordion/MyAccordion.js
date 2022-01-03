import React, { useState } from 'react';

const MyAccordion = ({title,body}) =>{
    const [show,setShow] = useState(false);
    return(
        <>
            <div className="accordion__item">
                <header className="item__header">
                    <h3 onClick = {() => setShow(!show)}>{ show? '-':'+'}</h3>
                    <h4 className="item__question">{title}</h4>
                </header>
               { show && 
                    <p className='item_cont'>
                        {body}
                    </p>
               }
            </div> 
        </>
    )
};

export default MyAccordion;