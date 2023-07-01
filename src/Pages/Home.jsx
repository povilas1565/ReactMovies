import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMovies } from "../Redux/movies.actions";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Movies from "../components/Movies/Movies";

const initialFilter = {
  Title: "",
  Director: "",
  Year: "",
  Genre: "",
  sort_Title: false,
  sort_Director: false,
  sort_Genre: false,
  sort_Year: false,
};
function Home() {
  // * state for managing filters
  const [filter, setFilter] = useState(initialFilter);

  const dispatch = useDispatch();

  const fetchAllMovies = (query = "") => {
    dispatch(getMovies(query, toast));
  };

  const buildQueryFromFilters = () => {
    let query = "";
    let sort = "";
    let order = "";

    for (let key in filter) {
      // splited key to check whether it is sort or filter
      let arr = key.trim().split("_");

      // *if it is sort add it to sort and order variable
      if (arr[0] === "sort") {
        if (filter[key]) {
          sort += `${arr[1]},`;
          order += `asc,`;
        }
        // *if it is filter add it to query variable
      } else if (filter[key] !== "") {
        query += `${key}=${filter[key]}&`;
      }
    }
    // * merging sort and filter query together
    query += `_sort=${sort}&_order=${order}`;

    fetchAllMovies(query);
  };

  return (
    <div>
      <Navbar />
      {/* <Flex> */}
      <Sidebar
        filter={filter}
        setFilter={setFilter}
        buildQueryFromFilters={buildQueryFromFilters}
      />
      <Movies fetchAllMovies={fetchAllMovies} />
      {/* </Flex> */}
      <ToastContainer />
    </div>
  );
}

export default Home;
