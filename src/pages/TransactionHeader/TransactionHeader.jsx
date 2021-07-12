import Button from "../_share/TransactionHeader/TransactionHeader.js";
const TransactionHeader = ({transTitle}) => {
    return (
        <>
            <Button title="GoBack" />
            <h1>{transTitle}</h1>
       </>     
    );
}
export default TransactionHeader;