import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText( /checkout form/i );
    expect( header ).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText( /first name:/i );
    const lastNameInput = screen.getByLabelText( /last name:/i );
    const addressinput = screen.getByLabelText( /address:/i );
    const cityInput = screen.getByLabelText( /city:/i );
    const stateInput = screen.getByLabelText( /state:/i );
    const zipInput = screen.getByLabelText( /zip:/i );
    const btn = screen.getByTestId( /button/i );

    userEvent.type( firstNameInput, 'Vince' )
    userEvent.type( lastNameInput, 'Garcia' )
    userEvent.type( addressinput, 'Street St' )
    userEvent.type( cityInput, 'Anaheim' )
    userEvent.type( stateInput, 'CA' )
    userEvent.type( zipInput, '92802' )
    userEvent.click(btn);

    expect( firstNameInput ).toHaveValue( 'Vince' );
    expect( lastNameInput ).toHaveValue( 'Garcia' );
    expect( addressinput ).toHaveValue( 'Street St' );
    expect( cityInput ).toHaveValue( 'Anaheim' );
    expect( stateInput ).toHaveValue( 'CA' );
    expect( zipInput ).toHaveValue( '92802' );

    const msg = await screen.getByTestId( 'successMessage' );
    expect( msg ).toBeInTheDocument();
    

});
