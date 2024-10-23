import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import axios from 'axios';
import { useEffect, useState } from 'react';
import URL from "../../../env";
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
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`${URL}/zakatcare/donations`, { withCredentials: true });
        const donations = response.data.allDonations;
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
          "#FF9F40" // Add more colors if necessary
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
                <DashTotal head="Total Users" desc="190" img={dashUser1} />
                <DashTotal head="Total Donation" desc="34,809" img={donate} />
                <DashTotal head="Total Donors" desc="120" img={donor} />
                <DashTotal head="Total Recievers" desc="56" img={reciever} />
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
