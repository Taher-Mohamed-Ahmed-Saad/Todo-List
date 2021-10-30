import React from 'react'
import"../index.css"

const Todoitems = (probs) => {

    const DeleteItem = probs.DeleteItem;

    let data = probs.items ;

    if (data.length > 0 )  {

        data = data.map(item => {

            return (
                <div key={item.id}>
                    <span className="task">  {item.task} </span>
                    <span className="time" >  {item.time} </span>  
                    <span onClick={() => DeleteItem(item.id)} className="action icon" >  &times; </span>  
                </div>    
            )    
          })

    } else {

        data = ( <p> There is no items to show </p> )

    }

     /*   
    Another way of implementation 

    const data = probs.items.length ?
    
    ( probs.items.map(item => {
        return (
            <div key={item.id}>
                <span>  {item.name} </span>
                <span>  {item.time} </span>  
                <span onClick={() => DeleteItem(item.id)} >  &times; </span>  
            </div>

        )

      })
    )
    :
    (
        <p> There is no items to show </p>
    )
    
*/
    return (

        <div className="listitem">
            <div >
                <span className="task title"> Task</span>
                <span className="time title"> Expected time</span>
                <span className="action title"> Action</span>
            </div>
            {data}
        </div>
    )
}

export default Todoitems
