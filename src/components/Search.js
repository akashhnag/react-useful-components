import React, { Component } from 'react'
import data from '../data/data';

let c = 0
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
            //console.log('search string', this.state.searchString);
            let searchWord = this.state.searchString;
            c = searchWord.length;
            console.log('search word in set state', searchWord);
            let result = data.filter((ele) => {
                let details = Object.keys(ele);
                return (details.some((ele1) => {
                    if (typeof (ele[ele1]) === 'string') {
                        if (ele[ele1].toLocaleLowerCase().substring(0, c) === searchWord.toLocaleLowerCase()) {

                            return ele
                        }
                    }
                }))
            })
            console.log('result', result);

            if (result.length == 0) {
                this.setState({
                    filteredData: data
                })
            }
            else {
                this.setState({
                    filteredData: result
                })
            }
        })


    }

    // submit = () => {
    //     console.log('got', this.state.searchString);
    //     let searchWord = this.state.searchString;
    //     let result = data.filter((ele) => {
    //         let details = Object.keys(ele);
    //         return (details.some((ele1) => {

    //             if (typeof (ele[ele1]) === 'string') {
    //                 if (ele[ele1].toLocaleLowerCase() === searchWord.toLocaleLowerCase()) {

    //                     return ele
    //                 }

    //             }

    //         }))


    //     })
    //     if (result.length == 0) {
    //         this.setState({
    //             filteredData: data
    //         })

    //     }
    //     else {
    //         this.setState({
    //             filteredData: result
    //         })
    //     }


    // }

    handleChange = (e) => {
        console.log('change', e);
        let result = data.filter((ele) => {
            let details = Object.keys(ele);
            return (details.some((ele1) => {
                if (typeof (ele[ele1]) === 'string') {
                    if (ele[ele1].toLocaleLowerCase() === e.target.value) {

                        return ele
                    }
                }
            }))
        })
        this.setState({
            filteredData: result
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.search}></input>
                {/* <button onClick={this.submit}>Submit</button> */}
                < input type='checkbox' name='male' value='male' onChange={this.handleChange} ></input > Male
        < input type='checkbox' name='female' value='female' onChange={this.handleChange} ></input > Female
        < table >
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


                </table >

            </div >
        )
    }
}

export default Search
