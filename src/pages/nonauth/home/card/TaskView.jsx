import React from "react";

function TaskView({ data, name }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{name}</h1>

      <div className=" w-full max-w-2xl h-[500px] overflow-y-auto rounded-lg shadow-lg bg-white p-4 space-y-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg p-4 shadow hover:shadow-md transition duration-200"
            >
              <h2 className="text-lg font-semibold">
                Complaint: {item.complaint}
              </h2>
              <p className="text-sm">Customer: {item.customerName}</p>
              <p className="text-sm">Status: {item.status}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No data available.</p>
        )}
      </div>
    </div>
  );
}

export default TaskView;
