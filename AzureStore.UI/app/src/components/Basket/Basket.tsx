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

interface Props {
    selectedItems: Array<any>;
    onItemSelect: (item:any) => void;
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
        orderItems : [{item:{id: 0, amount:0, name: ""}, quntity: 0}],
        total: 0
    };

    componentDidMount() {
        if(this.props.selectedItems) {
          this.setState({
            orderItems : this.props.selectedItems,
            total: this.getTotal()
          });
        }
    }

    handleCellClick = (id: any) => {
      let items = [...this.state.orderItems];
      var itemIndex = items.findIndex(o => o.item.id == id);
      items.splice(itemIndex, 1);
      this.setState({
        orderItems : items,
        total: this.getTotal()
      });

    }

    getTotal(): number {
      let total = 0;
      this.props.selectedItems.forEach(item => total+=item.item.amount*item.quantity);
      return total;
    }

    render() {
      const tableStyle = {
        margin: "40px auto",
        width: "800px"
      };

      return (
        <div style={tableStyle}>
          <Paper elevation={3} style={{padding: "40px"}}>
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
                    <StyledTableRow key={item.item.name}>
                      <TableCell component="th" scope="row">
                        {item.item.name}
                      </TableCell>
                      <StyledTableCell align="right">
                        <TextField defaultValue="1" size="small" type="number" InputProps={{inputProps: { min: 1 }}}/>
                      </StyledTableCell>
                      <StyledTableCell align="right">{item.item.amount}</StyledTableCell>
                      <StyledTableCell align="right" onClick={() => this.handleCellClick(item.item.id)}>
                          <IconButton>
                            <DeleteIcon/>
                          </IconButton>
                      </StyledTableCell>

                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{marginTop:"20px", display:"flex", justifyContent: "space-between"}}>
            <h3>Total: {this.state.total}</h3>
            <Button variant="contained" color="primary" style={{margin:"10px"}}
              disabled={!this.state.orderItems.length}>
              Create Order
            </Button>
          </div>
          </Paper>
        </div>
      );
    }
}