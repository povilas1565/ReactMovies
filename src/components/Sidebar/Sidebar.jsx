import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Datalist from "./Datalist";
import { directorData, genreData, yearData } from "./ListData";

const Sidebar = ({ filter, setFilter, buildQueryFromFilters }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    buildQueryFromFilters();
  }, [filter]);

  // button to toggle sidebar
  const toggleBtn = () => {
    setFlag(!flag);
  };

  // * for handling input Change
  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  // * for handling button Change
  const handleClick = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: !filter[e.target.name],
    });
  };

  return (
    <div className={flag ? `${styles.active}` : ``}>
      <button
        onClick={toggleBtn}
        className={styles.filterBtn}
      >
        Filter
      </button>
      <div className={styles.sidebar}>
        <h2>Add Filters Here</h2>

        {/* *Title Filter */}

        <div className={styles.filter}>
          <div>
            <label htmlFor="title">Filter by Title</label>
          </div>
          <input
            id="Title"
            name="Title"
            type="text"
            placeholder="Enter Title"
            onChange={handleChange}
          />

          {/* <button onClick={applyFilter}>Filter</button> */}
        </div>

        {/* *Director Filter */}

        <div className={styles.filter}>
          <div>
            <label htmlFor="director">Filter by Director</label>
          </div>
          <input
            id="Director"
            name="Director"
            type="text"
            placeholder="Enter Title"
            list="directors"
            onChange={handleChange}
          />
          <Datalist
            listId={"directors"}
            list={directorData}
          />
          {/* <button onClick={applyFilter}>Filter</button> */}
        </div>

        {/* *Year Filter */}

        <div className={styles.filter}>
          <div>
            <label htmlFor="Year">Filter by Year</label>
          </div>
          <input
            id="Year"
            name="Year"
            type="text"
            placeholder="Enter Year"
            list="years"
            onChange={handleChange}
          />
          <Datalist
            listId={"years"}
            list={yearData}
          />
          {/* <button onClick={applyFilter}>Filter</button> */}
        </div>

        {/* *Genre Filter */}

        <div className={styles.filter}>
          <div>
            <label htmlFor="genre">Filter by Genre</label>
          </div>
          <select
            onChange={handleChange}
            name="Genre"
            id="Genre"
          >
            {genreData.map((genre) => (
              <option
                key={genre}
                value={genre}
              >
                {genre === "" ? "All" : genre}
              </option>
            ))}
          </select>
        </div>

        {/* *Sorting */}

        <div className={`${styles.filter} ${styles.sort}`}>
          <div>
            <label htmlFor="title">Sort By</label>
          </div>
          <button
            className={filter.sort_Title ? styles.bgRed : ""}
            onClick={handleClick}
            name="sort_Title"
          >
            Title
          </button>
          <button
            className={filter.sort_Director ? styles.bgRed : ""}
            onClick={handleClick}
            name="sort_Director"
          >
            Director
          </button>
          <button
            className={filter.sort_Genre ? styles.bgRed : ""}
            onClick={handleClick}
            name="sort_Genre"
          >
            Genre
          </button>
          <button
            className={filter.sort_Year ? styles.bgRed : ""}
            onClick={handleClick}
            name="sort_Year"
          >
            Year
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
