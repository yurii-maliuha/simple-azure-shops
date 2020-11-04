import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge/Badge';

interface Props {
    selectedItemsCount: number;
}

export default class BasketBadge extends React.Component<Props> {
    render() {
        return (
            <Badge badgeContent={this.props.selectedItemsCount} color="secondary">
                <ShoppingBasketIcon />
            </Badge>
        );
    }
}