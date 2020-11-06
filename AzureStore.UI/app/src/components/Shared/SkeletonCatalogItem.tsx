import React from "react";
import { Skeleton } from '@material-ui/lab';
import { Card, CardContent } from "@material-ui/core";

export default class SkeletonCatalogItem extends React.Component {
    render() {
        return (
            <Card style={{ height: '100%' }}>
                <Skeleton animation="wave" variant="rect" height="120px" />
                <CardContent>
                    <Skeleton animation="wave" variant="text" />
                </CardContent>
            </Card>)
    }
}