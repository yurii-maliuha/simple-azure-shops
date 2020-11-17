import React from 'react';
import OrderItem from '../../models/OrderItem';
import { StyledBreadcrumbs } from '../Shared/BreadcrumbWrapper';
import { StyledLink } from '../Shared/LinkWrapper';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import PayPal from '../../containers/PayPalFormConteiner';

interface Props {   
    orderItems: OrderItem[],
    orderCreated: boolean,
    submitOrder: (order: any) => void;
}

export default class Checkout extends React.Component<Props>
{
    state = {
        userEmail: ""
      };

    handleEmailChange = (event: any) => {
        this.setState({ userEmail: event.target.value });
    }

    onSubmit = () => {
        const order = {
          userEmail: this.state.userEmail,
          orderItems: this.props.orderItems.map(o => {
           return {
               comodityId: o.product.id, 
               quantity: o.quantity,
               price: o.product.price
            };
          })
        };
  
        this.props.submitOrder(order);
      }

      render() {
          var mainContent = {};
          if(this.props.orderCreated) {
            mainContent = <div><PayPal /></div>
          } else {
            mainContent = <div>
                <div>
                    <TextField required label="Please enter your email" onChange={this.handleEmailChange}/>
                </div>
                <div>
                    <Button variant="contained" color="primary"
                        style={{margin: "20px 0"}}
                        disabled={!this.state.userEmail || !this.props.orderItems?.length}
                        onClick={() => this.onSubmit()}>
                        Submit
                    </Button>
                </div>
            </div>
          }
          return (
            <Container style={{padding: "40px 20px"}}>
                <StyledBreadcrumbs aria-label="breadcrumb">
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                    <span style={{color: "gray"}}>
                        Checkout
                    </span>
                </StyledBreadcrumbs>
                <div style={{margin: "20px 0"}}>
                    {mainContent}
                </div>
            </Container>
          )
      }
}