import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Databases",
    Svg: require("@site/static/img/user/sql_image.svg").default,
    description: (
      <>
        Databases are the backbone of any application. Learn how to use them to
        store and retrieve data. SQL and NoSQL databases are covered.
      </>
    ),
  },
  {
    title: "Java",
    Svg: require("@site/static/img/user/java_image.svg").default,
    description: (
      <>
        Java is a class-based, object-oriented programming language that is
        designed to have as few implementation dependencies as possible.
      </>
    ),
  },
  {
    title: "Python",
    Svg: require("@site/static/img/user/python_image.svg").default,
    description: (
      <>
        Python is an interpreted, high-level & general-purpose language. Write
        clear, logical code for small and large-scale projects.
      </>
    ),
  },
  {
    title: "Linux",
    Svg: require("@site/static/img/user/Pinguino-Linux.svg").default,
    description: (
      <>
        Linux is a family of open-source Unix-like operating systems based on
        the Linux kernel. Learn how to use the command line and write shell
        scripts.
      </>
    ),
  },
  {
    title: "Vim",
    Svg: require("@site/static/img/user/vim-image.svg").default,
    description: (
      <>
        Vim is a highly configurable text editor built to enable efficient text
        editing. It is an improved vi editor distributed with most UNIX systems.
      </>
    ),
  },
  {
    title: "Operating Systems",
    Svg: require("@site/static/img/user/virtual-machine-host-image.svg")
      .default,
    description: (
      <>
        Operating systems are the interface between the user and the hardware. A
        few popular ones are Windows, Linux, macOS, Android, and iOS.
      </>
    ),
  },
  {
    title: "PostgreSQL",
    Svg: require("@site/static/img/user/Postgresql_elephant.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "MySQL",
    Svg: require("@site/static/img/user/mysql-image.svg").default,
    description: (
      <>
        MySQL is an open-source relational database management system. The SQL
        in MySQL stands for Structured Query Language.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
