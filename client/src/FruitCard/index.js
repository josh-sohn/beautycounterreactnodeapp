import React from 'react';
import '../App.css';
const FruitCard = (props) => {
    let { data } = props;
    console.log('data ', data)
    return(
        <>
            <div className="card">
                <div className="img-div">
                    <img src={data.image} alt={data.name}/>
                </div>
                <div className="desc">
                    <p>Name: {data.name}</p>
                    <p>Weight: {data.weight} {data.unitOfMeasurement}</p>
                </div>
            </div>
        </>
    )
}
export default FruitCard;