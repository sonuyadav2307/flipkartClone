const initialState = {
    allData : [...],
    allFilters : {
        brand: ["Mi", "Real Me", "Samsung"],
        ram: ["2 Gb", "3 Gb", "4 Gb"],
    },
    appliedFilters : {}


  
};

const appliedFilRed = {
  brand: ["Samsung"],
  ram: ["2 Gb", "4 Gb"],
};

const keys = Object.keys(appliedFilRed);
let data = [...alldata];

keys.forEach((key) => {
  data = data.filter((x) => appliedFilRed[key].includes(x[key]));
});


