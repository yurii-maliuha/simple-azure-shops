import React from 'react';
import { MenuItem } from '@material-ui/core';

interface Props {
    getCategories: () => void;
    categories: Array<any>;
}

export default class Sidebar extends React.Component<Props> {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const categories =
            this.props.categories.map((item) => {
                return <MenuItem value={item.id}>{item.name}</MenuItem>
            });

        return (
            <div>
                {categories}
            </div>
        );
    }
}