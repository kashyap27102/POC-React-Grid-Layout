import { Search, Filter, ArrowUpDown, MoreHorizontal } from "lucide-react";

interface Deal {
  id: string;
  company: string;
  contact: {
    name: string;
    avatar: string;
  };
  email: string;
  value: number;
  source: string;
}

const deals: Deal[] = [
  {
    id: "01",
    company: "Acme",
    contact: {
      name: "Tyra Dhillon",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    email: "tyradhillon@acme.com",
    value: 3912,
    source: "Social Networks",
  },
  {
    id: "02",
    company: "Academic Project",
    contact: {
      name: "Britni Lando",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    email: "lando@academicproject.com",
    value: 2345,
    source: "Outreach",
  },
  {
    id: "03",
    company: "Aimbus",
    contact: {
      name: "Kevin Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    email: "chen@aimbus.com",
    value: 13864,
    source: "Referrals",
  },
  {
    id: "04",
    company: "Big Bang Production",
    contact: {
      name: "Josh Ryan",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    email: "joshryan@gmail.com",
    value: 6314,
    source: "Word-of-mouth",
  },
  {
    id: "05",
    company: "Book Launch",
    contact: {
      name: "Chikko Chute",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    email: "chikko67@booklaunch.com",
    value: 5982,
    source: "Outreach",
  },
];

export const ResponsiveDealTable = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <span className="text-sm font-medium">All deals</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-2 space-y-2 sm:space-y-0">
          <button className="flex items-center space-x-1 text-sm text-gray-600 bg-white border rounded-md px-3 py-1 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex items-center space-x-1 text-sm text-gray-600 bg-white border rounded-md px-3 py-1 hover:bg-gray-50">
            <ArrowUpDown className="w-4 h-4" />
            <span className="hidden sm:inline">Sort</span>
          </button>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Deals</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3 hidden sm:table-cell">Email</th>
              <th className="px-6 py-3 hidden md:table-cell">Value</th>
              <th className="px-6 py-3 hidden lg:table-cell">Source</th>
              <th className="px-6 py-3 sm:hidden">Details</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {deals.map((deal, index) => (
              <tr
                key={deal.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {deal.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {deal.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={deal.contact.avatar}
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {deal.contact.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                  {deal.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                  ${deal.value.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                  {deal.source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 sm:hidden">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
