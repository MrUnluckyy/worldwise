import React from "react";
import Spinner from "./Spinner";

import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return (
      <Message message="No visited cities yet. Add them by clicking on a city in the map" />
    );
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
