import React, { Component } from 'react'
import data from '../data/data';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            filteredData: data
        }
        console.log(data);

    }
    search = (e) => {
        console.log(e.target.value);
        this.setState({
            searchString: e.target.value
        }, () => {
            let searchWord = this.state.searchString;
            let result = data.filter((ele) => {
                let details = Object.keys(ele);
                return (details.some((ele1) => {

                    if (typeof (ele[ele1]) === 'string') {
                        if (ele[ele1].toLocaleLowerCase() === searchWord.toLocaleLowerCase()) {

                            return ele
                        }

                    }

                }))


            })
            console.log(result);
        })


    }
    submit = () => {
        console.log('got', this.state.searchString);
        let searchWord = this.state.searchString;
        let result = data.filter((ele) => {
            let details = Object.keys(ele);
            return (details.some((ele1) => {

                if (typeof (ele[ele1]) === 'string') {
                    if (ele[ele1].toLocaleLowerCase() === searchWord.toLocaleLowerCase()) {

                        return ele
                    }

                }

            }))


        })

    }
    render() {
        return (
            <div>
                <input onChange={this.search}></input>
                <button onClick={this.submit}>Submit</button>
                <table>
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Gender</th>
                            <th>Email</th>

                        </tr>

                    </thead>
                    {
                        this.state.filteredData.map((dat) => (
                            <tbody key={dat.id}>
                                <tr>
                                    <td>{dat.id}</td>
                                    <td>{dat.first_name}</td>
                                    <td>{dat.last_name}</td>
                                    <td>{dat.gender}</td>
                                    <td>{dat.email}</td>

                                </tr>
                            </tbody>
                        ))
                    }


                </table>

            </div>
        )
    }
}

export default Search
