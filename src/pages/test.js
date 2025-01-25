// import React, { useEffect, useState } from "react";

// function HomePage() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/example.json")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching JSON data:", error));
//   }, []);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.description}</p>
//     </div>
//   );
// }

// export default HomePage;

import React, { useEffect, useState } from "react";
import clsx from "clsx";
// import styles from "./styles.module.css"; // Adjust the path as needed

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Svg} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function TestPage() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/example.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  if (features.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
