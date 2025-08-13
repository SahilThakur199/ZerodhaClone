import React from "react";
import { useState } from "react";
import CreateTicket from "./CreateTicket";

function Middle( first, second ) {

    return (
        <div className="middle">
            <CreateTicket 
                first={"Account Opening"}
                second={["Account Issue", "Payment Problem", "Technical Support", "Other"]}
            />
            <CreateTicket 
                first={"Your Account"}
                second={["Your Profile", "Account Update", "Client Master Report", "Nomination"]}
            />
            <CreateTicket 
                first={"Kite"}
                second={["IPO", "Trading FAQ", "(MTF) and Margin", "Charts and orders", "General", "Other"]}
            />
            <CreateTicket 
                first={"Funds"}
                second={["Add Money", "Withdraw Money", "Add Bank Account", "eMandate"]}
            />
            <CreateTicket 
                first={"Console"}
                second={["Portfolio", "Corporate actions", "Funds statement", "Reports"]}
            />
            <CreateTicket 
                first={"Coin"}
                second={["Mutual Funds", "NPS", "FD", "Fututre of Coins", "Payment options"]}
            />
        </div>
    );
}
export default Middle;
