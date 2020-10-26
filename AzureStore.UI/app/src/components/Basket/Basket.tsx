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

interface Props {
    selectedItems: Array<any>;
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
        orderItems : [{id: 0, name: "", amount:0}]
    };

    componentDidMount() {
        if(this.props.selectedItems) {
            this.setState({orderItems : this.props.selectedItems});
        }
    }

    handleCellClick = (id: any) => {
      let items = [...this.state.orderItems];
      var itemIndex = items.findIndex(o => o.id == id);
      items.splice(itemIndex, 1);
      this.setState({orderItems : items});

    }

    render() {
      const tableStyle = {
        margin: "40px auto",
        width: "800px"
      };
        return (
          <div style={tableStyle}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.orderItems.map((item) => (
                    <StyledTableRow key={item.name}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <StyledTableCell align="right">{item.amount}</StyledTableCell>
                      <StyledTableCell align="right" onClick={() => this.handleCellClick(item.id)}>
                          <IconButton>
                            <DeleteIcon/>
                          </IconButton>
                      </StyledTableCell>

                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
          </div>
        );
    }
}