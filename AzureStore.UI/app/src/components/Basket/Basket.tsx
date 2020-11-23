import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import OrderItem from '../../models/OrderItem';
import Commodity from '../../models/Commodity';
import { StyledBreadcrumbs } from '../Shared/BreadcrumbWrapper';
import { StyledLink } from '../Shared/LinkWrapper';
import Utils from '../../services/utilsService';

interface Props {
    selectedItems: OrderItem[];
    onItemSelect: (item: Commodity) => void;
    onItemUnselect: (item: Commodity) => void;
    onItemDelete: (id: number) => void;
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
      orderItems: new Array<OrderItem>(),
      total: 0
    };

    componentDidMount() {
      this.setState({
        orderItems: this.props.selectedItems,
        total: this.getTotal()
      });     
    }

    componentDidUpdate(prevProps: Props, prevState: Props) {
      if (!Utils.equals(prevProps.selectedItems, this.props.selectedItems)  ) {
        this.setState({
          orderItems: this.props.selectedItems,
          total: this.getTotal()
        });  
      }
    }

    handleItemDelete = (id: number) => {
      const item = this.state.orderItems.find(o => o.product.id === id);
      if(!item){
        return;
      }

      this.props.onItemDelete(item.product.id);
    }

    handleQuantityChange = (productId: number, event: any) => {
      const item = this.state.orderItems.find(o => o.product.id === productId);
      if(item && item.quantity < +event.target.value) {
        this.props.onItemSelect(item.product);
      } else if (item) {
        this.props.onItemUnselect(item.product);
      }
    }

    getTotal(): number {
      const {selectedItems} = this.props;
      if(!selectedItems || selectedItems.length === 0) {
        return 0;
      }

      const total = selectedItems
        .map(x => x.quantity * x.product.price)
        .reduce((sum, val) => sum + val);

      return total;
    }

    render() {
      return (
        <Container style={{padding: "40px 20px"}}>
          <StyledBreadcrumbs aria-label="breadcrumb">
                <StyledLink to="/">
                    Home
                </StyledLink>
                <span style={{color: "gray"}}>
                    Basket
                </span>
            </StyledBreadcrumbs>
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
                          size="small" 
                          type="number" 
                          InputProps={{inputProps: { min: 1 }}}
                          value={item.quantity}
                          onChange={(e) => this.handleQuantityChange(item.product.id, e)}/>
                      </StyledTableCell>
                      <StyledTableCell align="right">{item.product.price}</StyledTableCell>
                      <StyledTableCell align="right" onClick={() => this.handleItemDelete(item.product.id)}>
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
              <Button variant="contained" color="primary"
                disabled={!this.state.orderItems.length}>
                  <StyledLink to="/checkout">
                    Create Order
                  </StyledLink>
              </Button>
          </div>
        </Container>
      );
    }
}