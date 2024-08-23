import React from 'react'
import "./dashboard.css"
import Box from './Box'
import { GiShinyPurse } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { TbPigMoney } from "react-icons/tb";
import SimpleBarChart from './SimpleBarChart';
import PieChart from './PieChart';
import { LoansData, Stock, Total } from './LoansData';


export default function Dashboard() {
    return (
        <div className='dash'>
            <div className='boks-boks'>
                <Box word={"My Balance"} money={"$12,750"} mark={<GiShinyPurse />} background={"#FFF5D9"} color={"#FFBB38"} />
                <Box word={"Income"} money={"$5,600"} mark={<FaMoneyBillTrendUp />} background={"#E7EDFF"} color={"#396AFF"} />
                <Box word={"Expense"} money={"$3,460"} mark={<GrMoney />} background={"#FFE0EB"} color={"#FF82AC"} />
                <Box word={"Total Saving"} money={"$7,920"} mark={<TbPigMoney />} background={"#DCFAF8"} color={"#16DBCC"} />
            </div>
            <div className='grafik2'>
                <div className='grafik1'>
                    <SimpleBarChart />
                </div>
                <div className='pie'>
                    <PieChart />
                </div>
                <div>
                    <table className='table2'>
                        <thead>
                            <tr className='tr5'>
                                <th className='stockTd'>SL No</th>
                                <th className='stockTd'>Name</th>
                                <th className='stockTd'>Price</th>
                                <th className='stockTd'>Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Stock.map((item, index) => (
                                    <tr className='tr6' key={index}>
                                        <td className='stockTd'>{item.row}</td>
                                        <td className='stockTd'>{item.name}</td>
                                        <td className='stockTd'>{item.price}</td>
                                        <td className='stockTd'>{item.return}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='activeLoans'>
                <table className='loansInfo'>
                    <thead>
                        <tr className='tr1'>
                            <th className='loansTd'>SL No</th>
                            <th className='loansTd'>Loan Money</th>
                            <th className='loansTd'>Left to repay</th>
                            <th className='loansTd'>Duration</th>
                            <th className='loansTd'>Interest rate</th>
                            <th className='loansTd'>Installment</th>
                            <th className='loansTd'>Repay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            LoansData.map((item, index) => (
                                <tr className='tr2' key={index}>
                                    <td className='loansTd'>{item.row}</td>
                                    <td className='loansTd'>{item.loanmoney}</td>
                                    <td className='loansTd'>{item.lefttorepay}</td>
                                    <td className='loansTd'>{item.duration}</td>
                                    <td className='loansTd'>{item.interestrate}</td>
                                    <td className='loansTd'>{item.installment}</td>
                                    <td className='loansTd btns'>{item.repay}</td>
                                </tr>
                            ))
                        }
                        {
                            Total.map((item, index) => (
                                <tr className='tr2' key={index}>
                                    <td className='loansTd r-d'>{item.row}</td>
                                    <td className='loansTd r-d'>{item.loanmoney}</td>
                                    <td className='loansTd r-d'>{item.lefttorepay}</td>
                                    <td className='loansTd r-d'>{item.duration}</td>
                                    <td className='loansTd r-d'>{item.interestrate}</td>
                                    <td className='loansTd r-d'>{item.installment}</td>
                                    <td className='loansTd r-d'>{item.repay}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
