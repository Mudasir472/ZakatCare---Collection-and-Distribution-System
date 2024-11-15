import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import axios from 'axios';
import { useEffect, useState } from 'react';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

import donor from "../../NewImages/donor.png";
import donate from "../../NewImages/donate.png";
import reciever from "../../NewImages/reciever.png";
import dashUser1 from "../../NewImages/dashUser1.png";

import React from 'react';
import DashTotal from './DashTotal';

const Dashboard = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRecievers, setRecievers] = useState(true);
  const [categoryData, setCategoryData] = useState({});
  const [totalDonation, setTotalDonation] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalContacts, setTotalContacts] = useState(0);



  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_LOCAL_HOST}/zakatcare/donations`, { withCredentials: true });
        const donations = response.data.allDonations;
        setTotalDonation(response.data.totalAmountOfDonations);
        setTotalDonors(response.data.totalUniqueDonors);

        const contacts = await axios.get(`${import.meta.env.VITE_LOCAL_HOST}/zakatcare/contact`);
        setTotalContacts(contacts.data.allContacts)

        const recievers = await axios.get(`${import.meta.env.VITE_LOCAL_HOST}/zakatcare/recieve-details`);
        setRecievers(recievers.data?.totalRecievers)

        const categories = {};
        const monthlyTotals = {};

        // Process donations to sum amounts by category and month
        donations.forEach(donation => {
          const { category, amount, date } = donation;
          const month = new Date(date).toLocaleString("default", { month: "short", year: "numeric" });

          // Sum amounts for each category
          if (!categories[category]) {
            categories[category] = 0;
          }
          categories[category] += amount;

          // Sum amounts for each month
          if (!monthlyTotals[month]) {
            monthlyTotals[month] = 0;
          }
          monthlyTotals[month] += amount;
        });

        setCategoryData(categories); // Set processed category data
        setMonthlyData(Object.entries(monthlyTotals).map(([month, total]) => ({ month, totalAmount: total })));
      } catch (error) {
        console.error('Error fetching donations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);
  // Total Users
  const totalusers = totalContacts.length + totalDonors;


  const barChartData = {
    labels: Object.keys(categoryData), // Categories as labels
    datasets: [
      {
        label: "Total Donations by Category",
        data: Object.values(categoryData), // Amounts as data
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40"
        ],
      },
    ],
  };

  return (
    <>
      <div className="dashboard container">
        <div className="dashboard-main flex flex-column items-start justify-evenly">
          <h3>Dashboard</h3>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <>
              <div className="dashboard-total flex items-center justify-between">
                <DashTotal head="Total Users" desc={totalusers.toLocaleString('en-IN')} img={dashUser1} />
                <DashTotal head="Total Donation" desc={'₹' + totalDonation.toLocaleString('en-IN')} img={donate} />
                <DashTotal head="Total Donors" desc={totalDonors.toLocaleString('en-IN')} img={donor} />
                <DashTotal head="Total Recievers" desc={totalRecievers.toLocaleString('en-IN')} img={reciever} />
              </div>
              <div className="chartMain">
                <Line
                  data={{
                    labels: monthlyData.map(month => month.month), // Use month names as labels
                    datasets: [
                      {
                        label: "Monthly Donations",
                        data: monthlyData.map(month => month.totalAmount),
                        backgroundColor: "#064FF0",
                        borderColor: "#064FF0",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      line: {
                        tension: 0.5,
                      },
                    },
                    plugins: {
                      title: {
                        text: "Total Donations Over Time",
                      },
                    },
                  }}
                />
              </div>
            </>
          )}
          <div className="category-chart">
            <Bar
              data={barChartData}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Total Donations by Category",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
