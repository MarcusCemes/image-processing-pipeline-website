import { Tooltip } from "@chakra-ui/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styled from "@emotion/styled";
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
import { breakpoints, Container } from "../components/layout";
import { ButtonLink } from "../components/layout/Button";
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
    title: "Simple",
    image: OnlineConnection,
    description: (
      <>
        Designed to by usable by anyone. It's modularity makes it possible to be used as a simple
        command-line tool or with deeper integration with an existing build process.
      </>
    ),
  },
  {
    title: "Powerful",
    image: FileAnalysis,
    description: (
      <>
        It's fast. It uses modern compiled image libraries such as{" "}
        <a target="_blank" href="https://libvips.github.io/libvips/">
          libvips
        </a>{" "}
        to get that extra edge. A YAML/JSON pipeline lets you piece together pipes to customise the
        process.
      </>
    ),
  },
  {
    title: "Open Source",
    image: NatureOnScreen,
    description: (
      <>
        Image Processing Pipeline is released under the permissive open-source{" "}
        <a target="_blank" href="https://opensource.org/licenses/MIT">
          MIT license
        </a>
        . You can inspect the code, modify it and use it commercially, for free!
      </>
    ),
  },
];

const MarginContainer = styled(Container)`
  margin-bottom: 8em;
`;

const UnderlinedTitle = styled.h1`
  display: inline-block;
  position: relative;

  margin-bottom: 1.6em;

  &::after {
    content: "";
    position: absolute;

    top: calc(100% + 0.4em);
    height: 0.2em;
    left: -0.2em;
    right: -1em;

    background-color: var(--ifm-color-primary);
  }
`;

const DoubleColumn = styled.article`
  column-count: 1;
  column-gap: 4em;
  text-align: justify;

  @media only screen and (min-width: ${breakpoints.md}) {
    column-count: 2;
  }
`;

const MotivationButton = styled(ButtonLink)`
  margin: 2em 0 0;
`;

// Separated into individual components due to SSR class problems
const PlatformAgnostic: React.FC = () => (
  <Tooltip aria-label="explanation" label="It works on Windows, macOS and Linux" placement="top">
    <span className={styles.helpBold}>platform agnostic</span>
  </Tooltip>
);
const ModularCollection: React.FC = () => (
  <Tooltip aria-label="explanation" label="Only import what you need" placement="top">
    <span className={styles.helpUnderlined}>modular collection</span>
  </Tooltip>
);
const ConfigurablePipeline: React.FC = () => (
  <Tooltip aria-label="explanation" label="A declarative YAML file, no code needed!">
    <span className={styles.helpUnderlined}>configurable pipeline</span>
  </Tooltip>
);

const Description: React.FC = () => (
  <div className={styles.descriptionWrapper}>
    <div className={styles.description}>
      Image Processing Pipeline is a <PlatformAgnostic /> <ModularCollection /> of packages that
      glues together some of the best image libraries using an easily <ConfigurablePipeline />.
    </div>
  </div>
);

const About: React.FC = () => (
  <MarginContainer>
    <UnderlinedTitle>What is it?</UnderlinedTitle>
    <DoubleColumn>
      <p>
        Image Processing Pipeline is a{" "}
        <strong>harmonious collection of packages that automate the image build process</strong>.
        Users can define a <i>processing pipeline</i> in a text format that tells IPP what to do
        with each source image, such as resizing the image, compressing the image or creating
        different responsive variants. It is fast, non-destructive and focuses on quality.
      </p>

      <p>
        IPP does not implement any image processing algorithms, it is merely a{" "}
        <strong>wrapper around existing image libraries</strong>, such as libvips or Michael
        Fogleman's primitive SVG algorithm, written in Go (which is amazing, and yet has not seen
        much of the light of day). It is{" "}
        <strong>
          written in TypeScript (a statically typed superset of JavaScript) and runs on Node.js
        </strong>
        , the de-facto dominant platform for web-development related tools. It is therefore
        cross-platform and, most importantly, framework agnostic, meaning you can use this in any
        project you like. There are two official interfaces for IPP, the command-line tool and the
        webpack loader, however, you can easily create your own adapter for whatever build process
        you would like to use.
      </p>

      <p>
        IPP was created out of a lack of other solutions. It was meant to be an optimal no-comprises
        solution to image optimisation for the modern web. It is therefore designed in a particular
        way, and some of the higher-level modules are more opinionated, such as the manifest format.
        If this is not your style, you can use only the core functions and design your own export
        formats.
      </p>

      <p style={{ display: "flex", justifyContent: "center" }}>
        <MotivationButton to="/blog/2020/09/12/motivation" className="button button--secondary">
          Read more about the motivation
        </MotivationButton>
      </p>
    </DoubleColumn>
  </MarginContainer>
);

const How: React.FC = () => (
  <div className={styles.textSectionRight}>
    <div className={styles.textSectionContents}>
      <UnderlinedTitle>How it works</UnderlinedTitle>
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
        <About />
        <How />
        <WIP centre spacing="8" />
      </main>
    </Layout>
  );
};

export default Home;
