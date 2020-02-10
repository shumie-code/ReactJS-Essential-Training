import  React from 'react';
import { Component } from 'react';
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends Component {

    static defaultProps = {
        books: [
            {
                "title": "Tahoe Tales", "author": "Chet Whitley", "pages": 170}
        ]
    }

    state = { 
        open: true,
        freeBookMark: false,
        hiring: true,
        data: [],
        loading: false
    }

    // Component lifecycle method that sets the state of the the component and uses the browsers fetch method to call json data from api 
    // API data is then stored in data array as the current state
    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log('The component just updated')
    }
        // Method that lives inside the parent component that inherits its 
        // state via binding and can be altered by setState method  
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    
    // Render method attaches props passed down from functional child component
    // Down to UI element tas via props
    // Conditional rendering applied to components to determine which component to be rendered using the ternary operator
    // The data returned from the api as json has been attached to ui html element tags for dom rendering 
    render () {
        const { books } = this.props
        return (
        <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
        ? "loading..."
        : <div>
            {this.state.data.map(product => {
                return (
                    <div key={product.id}>
                   <h3>Library products of the Week</h3> 
                   <h4>{product.name}</h4>
                   <img alt={product.name} src={product.image} height={100}/>
                   <h1>{product.price}</h1>
                   <h2>{product.id}</h2>
                   </div>
                    
                )
            })}

        </div>
        }
            <h1> The library is {this.state.open ? 'open' : 'closed'}</h1>
            <button onClick={this.toggleOpenClosed}>Change</button>
            {books.map(
                (book, i) => 
                <Book 
                key={i}
                title={book.title} 
                author={book.author} 
                pages={book.pages}
                freeBookMark={this.state.freeBookMark}
                 />
            )}
          </div>
        )
     }
}

export default Library;