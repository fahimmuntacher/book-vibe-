import React, { useContext } from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { WishListDataContext } from '../RootLayouts';

const PagesToRead = () => {
  const { wishList } = useContext(WishListDataContext);

  // 🔹 যদি wishlist ফাঁকা থাকে বা undefined হয়
  if (!wishList || wishList.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          No Books in Wishlist 📚
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Add some books to your wishlist to see them here.
        </p>
        <div className="animate-bounce text-green-500 text-5xl">📖</div>
      </div>
    );
  }

  // 🔹 Chart data তৈরি
  const data = wishList.map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
  }));

  const colors = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#FF6B6B',
    '#A020F0',
  ];

  // 🔹 Custom bar shape
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-10 px-4">
      <h1 className="text-4xl text-center font-bold mb-8">
        📖 Pages to Read (Wishlist)
      </h1>

      <div
        className="max-w-[1200px] mx-auto bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 mb-5"
        style={{ height: 500 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                border: '1px solid #ccc',
              }}
            />
            <Bar
              dataKey="uv"
              shape={<TriangleBar />}
              label={{ position: 'top', fill: '#555', fontSize: 12 }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PagesToRead;
