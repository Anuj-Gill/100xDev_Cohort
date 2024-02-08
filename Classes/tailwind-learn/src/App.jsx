import { useState } from "react";
import { RevenueCard } from "./components/RevenueCard";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BelowNavbar } from "./components/BelowNavbar";
import {
  TransactionsHeader,
  TransactionsSearch,
  TransactionsTableHeader,
  TrasactionsDetails,
} from "./components/Transactions";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <body className="pt-20 mb-100 bg-gray-50 pl-60 ">
      <Sidebar />
      <Navbar />
      <BelowNavbar />
      <div className="-ml-56 md:ml-0">
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <RevenueCard
            title={"Next Payout"}
            amount={"92,000.00"}
            orderCount={13}
            first={true}
          />
          <RevenueCard
            title={"Amount Pending"}
            amount={"92,000.00"}
            orderCount={13}
          />
          <RevenueCard title={"Amount Processed"} amount={"92,000.00"} />
        </div>
        <div className="mr-12 ml-2">
          <TransactionsHeader payouts={22} refunds={30} />
          <div className="pl-3">
            <TransactionsSearch />
            <table className="table-auto w-full">
              <thead className="bg-gray-200">
                <TransactionsTableHeader />
              </thead>
              <tbody>
                <TrasactionsDetails
                  orderId={"#281209"}
                  status={true}
                  transactionId={"TRX123456"}
                  refundDate={"Today, 8:45 PM"}
                  orderAmount={"$1125.00"}
                />
                <TrasactionsDetails
                  orderId={"#281210"}
                  status={false}
                  transactionId={"TRX123457"}
                  refundDate={"Tomorrow, 10:00 AM"}
                  orderAmount={"$202.00"}
                />
                <TrasactionsDetails
                  orderId={"#281211"}
                  status={true}
                  transactionId={"TRX123458"}
                  refundDate={"Yesterday, 3:30 PM"}
                  orderAmount={"$30.00"}
                />
                <TrasactionsDetails
                  orderId={"#281212"}
                  status={true}
                  transactionId={"TRX123459"}
                  refundDate={"Today, 8:45 PM"}
                  orderAmount={"$779.00"}
                />
                <TrasactionsDetails
                  orderId={"#281213"}
                  status={"Processing"}
                  transactionId={"TRX123460"}
                  refundDate={"Today, 11:20 AM"}
                  orderAmount={"$110.00"}
                />
                <TrasactionsDetails
                  orderId={"#281214"}
                  status={false}
                  transactionId={"TRX123461"}
                  refundDate={"Tomorrow, 9:00 AM"}
                  orderAmount={"$113.00"}
                />
                <TrasactionsDetails
                  orderId={"#281215"}
                  status={"Successful"}
                  transactionId={"TRX123462"}
                  refundDate={"Today, 8:45 PM"}
                  orderAmount={"$300.00"}
                />
                <TrasactionsDetails
                  orderId={"#281216"}
                  status={false}
                  transactionId={"TRX123463"}
                  refundDate={"	Yesterday, 4:00 PM	"}
                  orderAmount={"$420.00"}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 font-normal text-gray-500 text-xl">Made with 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 ml-1 mr-1">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

      by <a href="https://twitter.com/anujgill_01" target="_blank" className="underline">Anuj Gill</a></div>
    </body>
  );
}

export default App;
