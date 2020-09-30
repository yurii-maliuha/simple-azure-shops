import React from 'react';

interface Props {
    getCatalog : () => void;
    catalogItems: Array<any>;
}

export default class Catalog extends React.Component<Props> {

    componentDidMount() {
        this.props.getCatalog();
    }
    render() {
        return (<div>
            Catalog
        </div>);
    }
}
