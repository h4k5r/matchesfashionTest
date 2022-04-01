import {numbersWithCommas} from "../Utils/numbersWithCommas";

const Product = (props) => {
    const {id, brand, name, quantitySold, soldPrice, costToBusiness} = props.product
    let profit
    if (quantitySold <= 10) {
        profit = (soldPrice - costToBusiness) * quantitySold
    } else {
        const firstTenProfit = (soldPrice - costToBusiness) * 10
        const nextProfit = (soldPrice - costToBusiness) * (quantitySold - 10) * (1 - props.taxRate)
        profit = firstTenProfit + nextProfit;
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{brand}</td>
            <td>{name}</td>
            <td>{quantitySold}</td>
            <td>£{soldPrice}</td>
            <td>£{costToBusiness}</td>
            <td>£{numbersWithCommas(profit.toFixed(2))}</td>
        </tr>
    )
}
export default Product;