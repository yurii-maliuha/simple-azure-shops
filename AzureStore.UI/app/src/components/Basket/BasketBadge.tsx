import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge/Badge';

interface Props {
    selectedItems: Array<any>;
}

export default class BasketBadge extends React.Component<Props> {
    state = {itemsCount: 0};
    componentDidUpdate() {
        if(this.state.itemsCount !== this.props.selectedItems.length) {
            this.setState({itemsCount: this.props.selectedItems.length});
        }
    }
    render() {
        return (
            <Badge badgeContent={this.state.itemsCount} color="secondary">
                <ShoppingBasketIcon />
            </Badge>
        );
    }
}