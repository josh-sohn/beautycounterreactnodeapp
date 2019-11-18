import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'
import { Button, Card } from 'antd';
const HomePage = (props) => {
    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', 'margin-top': '10%' }}>
            <Card bordered={false} style={{ width: 400, 'border-radius': '10%' }}>
                <h1>Find Your Fruit!</h1>
                <h2>Rules:</h2>
                <p>There are only 5 fruits in the "database" : </p>
                <p>Strawberry, Cherry, Banana, Watermelon, and Apple.</p>
                <br></br>
                <Link to="/fruitpage">
                    <Button type="primary">Click To Enter</Button>
                </Link>
            </Card>
        </div>
    )
};
export default HomePage;