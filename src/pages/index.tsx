import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { GiWarpPipe } from "react-icons/gi";
import { GrTree } from "react-icons/gr";
import { FileAnalysis } from "../components/illustrations/FileAnalysis";
import { NatureOnScreen } from "../components/illustrations/NatureOnScreen";
import { OnlineConnection } from "../components/illustrations/OnlineConnection";
import { Hero } from "../components/landing/Hero";
import { WIP } from "../components/wip/WIP";
import { Demo } from "../containers/demo";
import styles from "./index.module.css";

type Feature = {
  title: string;
  description: ReactNode;
  image: React.FC<{ className?: string }>;
};

const features: Feature[] = [
  {
    title: "Easy to use",
    image: OnlineConnection,
    description: (
      <>
        IPP was designed from the ground up to be used by anyone. Its modularity lets you choose
        whether you want a quick and easy command-line tool, or a deeper integration with an
        existing build process.
      </>
    ),
  },
  {
    title: "Flexible",
    image: NatureOnScreen,
    description: (
      <>
        Whether you want to keep it simple for your end-users, or get fancy with placeholders, we've
        got you covered! IPP supports{" "}
        <Link href="https://github.com/fogleman/primitive">geometric primitive tracing</Link> out of
        the box.
      </>
    ),
  },
  {
    title: "Powerful",
    image: FileAnalysis,
    description: (
      <>
        Customize your pipeline, or even make your own pipes! Choose how you want your images to
        turn out whilst maximising parallelism and quality.
      </>
    ),
  },
];

const Description: React.FC = () => (
  <div className={styles.descriptionWrapper}>
    <div className={styles.description}>
      Image Processing Pipeline is a <strong>platform-agnostic modular</strong> collection of
      packages that aims to glue together various image libraries into and configurable automated
      pipeline.
    </div>
  </div>
);

const Philosophy: React.FC = () => (
  <div className={styles.textSectionLeft}>
    <div className={styles.textSectionContents}>
      <h1 className={styles.textSectionTitle}>Philosophy</h1>
      <p>
        Images make your websites pop, but they are also the largest asset that you serve to your
        client. Correctly optimising images provides a much better experience, by not wasting your
        visitors' bandwidth, battery and making the navigation of your website smoother.
      </p>
      <p>
        At its highest level, Image Processing Pipeline is a command line tool that helps you{" "}
        <strong>automate</strong> your website's image build process in a{" "}
        <strong>non-destructive</strong> way, with <strong>speed</strong> and{" "}
        <strong>quality</strong> in mind. At a lower level, it is a modular set of functions that
        can be integrated into any existing backend service.
      </p>
    </div>
  </div>
);

const How: React.FC = () => (
  <div className={styles.textSectionRight}>
    <div className={styles.textSectionContents}>
      <h1 className={styles.textSectionTitle}>How it works</h1>
      <h3 className={styles.titleWithIcon}>
        <GrTree className={styles.titleIcon} /> Pipeline
      </h3>
      <p>
        At the heart is a user-defined pipeline. A <strong>pipeline</strong> is a collection of{" "}
        <strong>pipes</strong> that can be assembled in any tree-like pattern, along with any
        additional options and an optional <strong>save key</strong> that will mark the pipe's
        output for export.
      </p>

      <h3 className={styles.titleWithIcon}>
        <GiWarpPipe className={styles.titleIcon} /> Pipe
      </h3>
      <p>
        Pipes are <strong>simple asynchronous functions</strong> that take a source image and output
        any number of <strong>formats</strong>. Pipes can apply any transformation to the source
        image, such as resizing, compressing or converting the image.
      </p>

      <h3 className={styles.titleWithIcon}>
        <AiOutlineFileText className={styles.titleIcon} /> Metadata
      </h3>
      <p>
        Every image is accompanied by a <strong>metadata</strong> object, which is a collection of
        key-value pairs that describe the image. Pipes may modify an image's metadata object, which
        can later be used to customise the output filename or to create an image{" "}
        <strong>manifest</strong> file.
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
        <Description />
        <Features />
        <Demo />
        <Philosophy />
        <How />
        <WIP centre spacing="8" />
      </main>
    </Layout>
  );
};

export default Home;
