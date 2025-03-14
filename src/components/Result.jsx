import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result ({input}) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                { resultData.map((result, i) => {
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;
                    const yearData = {
                        ...result,
                        totalInterest,
                        totalAmountInvested
                    }
                   return <AnnualResult key={result.year} result={yearData} />})
                }
            </tbody>
        </table>
    );
}

function AnnualResult ({result:{year, interest, valueEndOfYear,annualInvestment, totalInterest, totalAmountInvested}}) {
    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
  )
}
