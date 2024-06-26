import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { objToPath } from 'jvtools';
import Hero from './_components/Hero';
import ProjectSection from './_components/ProjectSection';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const tmp = objToPath({ test: 'test' })
  console.log("🚀 ~ file: index.tsx:9 ~ Home ~ tmp:", tmp);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main>
        <Hero />
        <div className="container-wrapper">
          <ProjectSection />
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
