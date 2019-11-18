import React, { Component } from 'react';
import FruitCard from '../FruitCard';
import '../App.css';
import { Button, Input} from 'antd';
import API from '../utils/API';

const { Search } = Input;

class FruitPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searched: false
        }
    }
    
    search =  async (value) => {
        try {
            if (!value) {
                this.handleError();
                return  
            }
            const response = await API.get(`/fruits/${value}`)
            if (response.status === 200) {
                let fruitObj = response.data.data;
                this.setState({data: [fruitObj], searched: true});
            } else {
                this.handleError();
            }
        } catch (err) {
            console.log(err)
            this.handleError();
        }
    }



    getAllFruits = async () => {
        try{
            const response = await API.get('/fruits');
            if(response.status === 200) {
                let allFruits = response.data.data
                this.setState({data: allFruits, searched: true})
                console.log(this.state.data)
            } else {
                this.handleError()
            }
        } catch (err) {
            console.log(err)
            this.handleError()
        }
    }

    handleError = () => {
        this.setState({
            data: [],
            searched: true
        });
    }

    render(){
        let { data, searched } = this.state;
        console.log('this.state ', this.state);
        return (
            <div>
                <div style={{textAlign: 'center', 'marginTop': '1%', 'fontSize': '30px'}}>
                    <h1 style={{'color':'white'}}>Fruit Finder</h1>
                </div>

                <div className='mainContainer'>
                    <div className='searchContainer'>
                        <div className='searchBar'>
                            <Search
                                placeholder="Search for either: Strawberry, Cherry, Banana, Watermelon, or Apple."
                                enterButton="Search"
                                size="large"
                                onSearch={value => this.search(value)}
                            />
                        </div>
                        <div className='searchButton'>
                            <Button type="danger" onClick={this.getAllFruits}>Get all fruits!</Button>
                        </div>
                    </div>

                    {searched && data.length < 1 ? (
                        <div className="fruitContainer">
                            <h2 style={{color: 'white', fontSize: '40px'}}>No fruits found</h2>
                        </div>
                    ) : (
                        <div className="fruitContainer">
                        {data.map((fruitObj) => {
                            return (
                                <FruitCard key={fruitObj.name} data={fruitObj} />
                            )
                        })}
                    </div>
                    )}
                    
                </div>
            </div>

        )
    }
}
export default FruitPage;