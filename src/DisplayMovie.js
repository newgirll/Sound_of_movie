import React, { Component } from 'react';

class DisplayMovie extends Component{

    render(){
   
        return(
            <div>
                <ul>
                    {
                        [this.props.movie].map((el)=>{
                            return(
                                <li>{el.Title}</li>
                            )
                        })
                    }
                    
                </ul>
            </div>


        );
    }
}

export default DisplayMovie;