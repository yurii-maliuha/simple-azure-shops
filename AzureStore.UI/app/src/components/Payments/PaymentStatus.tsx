import React from "react";
import { StyledBreadcrumbs } from '../Shared/BreadcrumbWrapper';
import { StyledLink } from '../Shared/LinkWrapper';
import { Container } from '@material-ui/core';
import { PaymentSaveStatus } from "../../models/PaymentSaveStatus";

interface Props {
    paymentSavedStatus: PaymentSaveStatus;
    bayer: string;
    resetSelectedItems: () => void;
}

export default class PaymentStatus extends React.Component<Props> {
    componentDidMount() {
        this.props.resetSelectedItems();
    }

    render() {
        var resultEl = <h3>Please select some products at home page.</h3>;
        if(this.props.paymentSavedStatus === PaymentSaveStatus.Successful) {
            resultEl = <h3 style={{color: "green"}}>Your purchase has been successfuly handled.</h3>
        } else if (this.props.paymentSavedStatus === PaymentSaveStatus.Failed) {
            resultEl = <h3 style={{color: "red"}}>Ooops! We have some issue with handling your order. Please try again</h3>
        }
        return (
            <Container style={{padding: "40px 20px"}}>
                <StyledBreadcrumbs aria-label="breadcrumb">
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                    <span style={{color: "gray"}}>
                        Payment Status
                    </span>
                </StyledBreadcrumbs>
                <div style={{margin: "20px 0"}}>
                    <h1> Hi dear {this.props.bayer}!</h1>
                    <div>{resultEl}</div>
                </div>
            </Container>
        )
    }
}