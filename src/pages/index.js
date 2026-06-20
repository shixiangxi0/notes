import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/dual-world-theory/preface">
            {isEn ? 'Start Reading' : '开始阅读'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  return (
    <Layout
      title={siteConfig.title}
      description={isEn ? 'Notes on causality-oriented architecture.' : '面向因果的架构思考笔记。'}>
      <HomepageHeader />
    </Layout>
  );
}
