import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { FileAnalysis } from "../components/illustrations/FileAnalysis";
import { NatureOnScreen } from "../components/illustrations/NatureOnScreen";
import { OnlineConnection } from "../components/illustrations/OnlineConnection";
import styles from "./index.module.css";

type Feature = {
  title: string;
  description: ReactNode;
  image: React.FC<{ className: string }>;
};

const features: Feature[] = [
  {
    title: "Easy to use",
    image: OnlineConnection,
    description: (
      <>
        IPP was designed from the ground up to be used by anyone. Its modularity lets you choose whether you want a
        quick and easy command-line tool, or a deeper integration with an existing build process.
      </>
    ),
  },
  {
    title: "Flexible",
    image: NatureOnScreen,
    description: (
      <>
        Whether you want to keep it simple for your end-users, or get fancy with placeholders, we've got you covered!
        IPP supports <Link href="https://github.com/fogleman/primitive">geometric primitive tracing</Link> out of the
        box.
      </>
    ),
  },
  {
    title: "Powerful",
    image: FileAnalysis,
    description: (
      <>
        Customize your pipeline, or even make your own pipes! Choose how you want your images to turn out whilst
        maximising parallelism and quality.
      </>
    ),
  },
];

const Hero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <header className={styles.heroBanner}>
    <div className={"container"}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
      <div className={styles.buttons}>
        <Link
          className={clsx("button button--outline button--secondary button--lg", styles.getStarted)}
          to={useBaseUrl("docs/")}
        >
          Get Started
        </Link>
      </div>
    </div>
  </header>
);

const About: React.FC = () => (
  <div className={styles.textSectionLeft}>
    <div className={styles.textSectionContents}>
      <h1 className={styles.textSectionTitle}>What is it?</h1>
      <p>
        Image Processing Pipeline is a collection of packages that work together to make the image side of web
        development a little easier.
      </p>
      <p>
        On a high level, IPP aims to make it as easy as possible to transform source images in non-destructive way. For
        example, you may choose to create a set of different sized images, suited for various screen sizes, create a
        WebP copy and generate a tiny SVG placeholder, <i>all at once</i>.
      </p>
    </div>
  </div>
);

const Why: React.FC = () => (
  <div className={styles.textSectionRight}>
    <div className={styles.textSectionContents}>
      <h1 className={styles.textSectionTitle}>Why?</h1>
      <p>
        Binary assets are enormous in comparison to the rest of your webpage. They take time to load, slow down mobile
        devices that must perform complex calculations on large images, and users will thank you for not eating up their
        mobile bandwidth. Properly sizes images are now more important than ever.
      </p>
    </div>
  </div>
);

const Feature: React.FC<Feature> = ({ image: Image, title, description }) => (
  <div className={clsx("col col--4", styles.feature)}>
    <div className="text--center">{<Image className={styles.featureImage} />}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features: React.FC = () => (
  <section className={styles.features}>
    <div className="container">
      <div className="row">
        {features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero title={siteConfig.title} subtitle={siteConfig.tagline} />
      <main className={styles.main}>
        <Features />
        <About />
        <Why />
      </main>
    </Layout>
  );
};

export default Home;
