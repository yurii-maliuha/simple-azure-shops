import React from 'react';

const emptyOrder = {
    userEmail: "",
    orderItems: []
};

interface Props {
    submitOrder: (order: any) => void;
    selectedItems: Array<any>;
}

interface State {
    userEmail: string,
    orderItems: []
}

export default class OrderForm extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = { userEmail: "", orderItems: []};
    }

    componentDidMount() {
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const {userEmail } = this.state;
        const order = {
            userEmail: userEmail,
            orderItems: [{comodityId: 1, quantity: 10}]
        };

        // this.props.submitOrder(order);
        this.setState({});
    }

    handleEmailChange = (event: any) => {
        this.setState({ userEmail: event.target.value });
    }

    render() {
        const { userEmail } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="userEmail">User Email</label>
              <input
                type="text"
                id="userEmail"
                value={userEmail}
                onChange={this.handleEmailChange}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        );
    }
}