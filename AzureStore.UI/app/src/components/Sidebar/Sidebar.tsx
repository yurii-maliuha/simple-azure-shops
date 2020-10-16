import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';

interface Props {
    getCategories: () => void;
    categories: Array<any>;
}


export default class Sidebar extends React.Component<Props> {

    static defaultProps = {
        categories: []
    };

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const categories = this.props.categories.map(item => {
            return <ListItem button key={item.id}>
                <ListItemText primary={item.name} />
            </ListItem>
        });
        return (<Drawer
            variant="permanent"
            anchor="left">
            <Divider />
            <List>
                {categories}
            </List>
        </Drawer>);
    }
}