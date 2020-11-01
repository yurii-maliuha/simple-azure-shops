import React from 'react';
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

interface Props {
    selectedItems: Array<any>;
    submitOrder: (order: any) => void;
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


export default class Basket extends React.Component<Props> {
    state = {
        orderItems : [{product:{id: 0, amount:0, name: ""}, quantity: 0}],
        total: 0,
        userEmail: ""
    };

    componentDidMount() {
      this.setState({
        orderItems : this.props.selectedItems,
        total: this.getTotal(this.props.selectedItems)
      });     
    }

    handleCellClick = (id: any) => {
      let items = [...this.state.orderItems];
      var itemIndex = items.findIndex(o => o.product.id == id);
      items.splice(itemIndex, 1);
      this.setState({
        orderItems : items,
        total: this.getTotal(items)
      });
    }

    handleQuantityChange = (productId: number, event: any) => {
      let items = [...this.state.orderItems];
      let itemIndex = items.findIndex(x => x.product.id === productId);
      if(itemIndex >= 0) {
        let item = items[itemIndex];
        const newQuantity = +event.target.value;
        item.quantity = newQuantity;
        items.splice(itemIndex, 1, item);
        this.setState({
          orderItems : items,
          total: this.getTotal(items)
        });
      }
    }

    handleEmailChange = (event: any) => {
        this.setState({ userEmail: event.target.value });
    }

    handleCreateOrderClick = () => {
      const order = {
        userEmail: this.state.userEmail,
        orderItems: this.state.orderItems.map(o => {
         return {comodityId: o.product.id, quantity: o.quantity};
        })
      };

      this.props.submitOrder(order);
    }

    getTotal(items: any): number {
      let total = 0;
      items.forEach((item: any) => total+=item.product.amount*item.quantity);
      return total;
    }

    render() {
      const tableStyle = {
        margin: "40px auto",
        width: "800px"
      };

      return (
        <Container style={{padding: "40px"}}>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.orderItems.map((item) => (
                    <StyledTableRow key={item.product.name}>
                      <TableCell component="th" scope="row">
                        {item.product.name}
                      </TableCell>
                      <StyledTableCell align="right">
                        <TextField 
                          defaultValue="1" 
                          size="small" 
                          type="number" 
                          InputProps={{inputProps: { min: 1 }}}
                          value={item.quantity}
                          onChange={(e) => this.handleQuantityChange(item.product.id, e)}/>
                      </StyledTableCell>
                      <StyledTableCell align="right">{item.product.amount}</StyledTableCell>
                      <StyledTableCell align="right" onClick={() => this.handleCellClick(item.product.id)}>
                          <IconButton>
                            <DeleteIcon/>
                          </IconButton>
                      </StyledTableCell>

                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{marginTop:"20px", display:"flex", justifyContent: "flex-end"}}>
            <h3>Total: {this.state.total}</h3>
          </div>
          <div style={{marginTop:"20px", display:"flex", justifyContent: "space-between"}}>
            <TextField required label="Please enter your email" onChange={this.handleEmailChange}/>
            <Button variant="contained" color="primary"
              disabled={!this.state.orderItems.length}
              onClick={() => this.handleCreateOrderClick()}>
              Create Order
            </Button>
          </div>
        </Container>
      );
    }
}