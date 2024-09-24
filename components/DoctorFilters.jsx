import { useState, useEffect } from "react";
import { AiFillFilter } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const DoctorFilters = () => {
  const [activeTab, setActiveTab] = useState("Location");

  const filters = {
    Location: [
      { name: "Use My location", icon: <MapPin className="h-4 w-4" /> },
      { name: "Powai" },
      { name: "Worli" },
      { name: "Vile Parle" },
      { name: "Andheri" },
      { name: "Vikhroli" },
      { name: "Ghatkopar" },
    ],
    Specialization: [
      { name: "Cardiologist" },
      { name: "Dentist" },
      { name: "Dermatologist" },
    ],
    Experience: [
      { name: "1-5 years" },
      { name: "5-10 years" },
      { name: "10+ years" },
    ],
    Gender: [{ name: "Male" }, { name: "Female" }],
    Fees: [{ name: "0-1000" }, { name: "1000-2000" }, { name: "2000+" }],
    Availability: [
      { name: "Morning" },
      { name: "Afternoon" },
      { name: "Evening" },
    ],
    "Associated Clinic": [{ name: "Clinic A" }, { name: "Clinic B" }],
  };

  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCheckboxChange = (category, filterName) => {
    setSelectedFilters((prevState) => {
      const updatedCategory = { ...(prevState[category] || {}) };
      updatedCategory[filterName] = !updatedCategory[filterName];
      return { ...prevState, [category]: updatedCategory };
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    setFilteredData({});
  };

  const handleApplyFilters = () => {
    const newFilteredData = {};
    Object.keys(selectedFilters).forEach((category) => {
      const selectedInCategory = Object.keys(selectedFilters[category]).filter(
        (filter) => selectedFilters[category][filter]
      );
      if (selectedInCategory.length > 0) {
        newFilteredData[category] = selectedInCategory;
      }
    });
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    console.log("Selected Filters:", selectedFilters);
  }, [selectedFilters]);

  useEffect(() => {
    console.log("Filtered Data:", filteredData);
  }, [filteredData]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-14 p-4 bg-white rounded-lg border border-[#dedede] justify-start items-start gap-1 inline-flex">
          <AiFillFilter className="text-[#154B6D] w-6 h-6 justify-center items-center flex" />
          <div className="text-[#2b4360] text-lg font-normal font-['Metropolis'] leading-relaxed">
            Filter
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-md flex flex-row">
        <div className="w-96 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#2B4360]">Filters</h2>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border border-[#2B4360] text-[#2B4360]"
                onClick={handleClearFilters}
              >
                Clear
              </Button>
              <Button size="sm" className="bg-[#2B4360]" onClick={handleApplyFilters}>
                Apply
              </Button>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex">
            <div>
              <div className="bg-gray-100">
                {Object.keys(filters).map((category) => (
                  <div key={category}>
                    <div
                      className={`cursor-pointer p-2 text-[#2B4360] ${
                        activeTab === category ? "bg-white font-semibold" : ""
                      }`}
                      onClick={() => handleTabClick(category)}
                    >
                      {category}
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-60 p-3">
              <div className="space-y-3">
                {filters[activeTab].map((filter, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        {filter.name}
                      </span>
                      {filter.icon ? (
                        filter.icon
                      ) : (
                        <Checkbox
                          id={`filter-${activeTab}-${filter.name}`}
                          checked={!!selectedFilters[activeTab]?.[filter.name]}
                          onCheckedChange={() => handleCheckboxChange(activeTab, filter.name)}
                        />
                      )}
                    </div>
                    <hr className="my-2"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DoctorFilters;
