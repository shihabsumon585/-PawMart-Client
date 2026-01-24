import { BarChart3, Users, ShoppingCart, DollarSign } from "lucide-react";
import { Link } from "react-router";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,245", icon: Users },
    { title: "Total Orders", value: "856", icon: ShoppingCart },
    { title: "Revenue", value: "$12,450", icon: DollarSign },
    { title: "Growth", value: "+18%", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Overview of your application</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
            </div>
            <item.icon className="w-10 h-10 text-indigo-500" />
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm text-gray-600">
              <span>User John placed an order</span>
              <span>2 min ago</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>New user registered</span>
              <span>10 min ago</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Order #245 shipped</span>
              <span>1 hour ago</span>
            </li>
          </ul>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Profile
          </h2>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">Md Shihab Sumon</p>
              {/* <p className="text-sm text-gray-500">Admin</p> */}
            </div>
          </div>
          <Link to={"/profile"} className="btn mt-5 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
