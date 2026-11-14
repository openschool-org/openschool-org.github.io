import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SeoHead from '@site/src/components/SeoHead';
import styles from './privacy.module.css';

const EFFECTIVE_DATE = 'August 10, 2026';
const GITHUB_URL = 'https://github.com/openschool-org/openschool';

const sections = [
  {id: 'overview', title: '1. Overview'},
  {id: 'this-website', title: '2. This Website'},
  {id: 'self-hosted-software', title: '3. The OpenSchool Software'},
  {id: 'cookies', title: '4. Cookies & Analytics'},
  {id: 'third-party-links', title: '5. Third-Party Links'},
  {id: 'changes', title: '6. Changes to This Policy'},
  {id: 'contact', title: '7. Contact'},
];

export default function Privacy(): React.ReactElement {
  return (
    <Layout
      title="Privacy Policy"
      description="What this website collects (very little) and how the self-hosted OpenSchool software handles data on each deployment.">
      <SeoHead
        path="/privacy"
        title="Privacy Policy"
        description="What this website collects (very little) and how the self-hosted OpenSchool software handles data on each deployment."
      />
      <header className="os-page-header">
        <div className="os-container">
          <span className="os-eyebrow">Legal</span>
          <h1 className="os-h1">Privacy policy</h1>
          <p className="os-lead">
            This website collects no personal data. OpenSchool deployments are operated by schools,
            not by this project.
          </p>
          <p className={styles.effective}>Effective {EFFECTIVE_DATE}</p>
        </div>
      </header>

      <section className="os-section">
        <div className="os-container os-split">
          <nav className="os-split__aside" aria-label="Table of contents">
            <span className="os-eyebrow">On this page</span>
            <ul className={styles.tocList}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="os-prose">
              <h2 id="overview">
                1. Overview
              </h2>
              <p>
                The OpenSchool project does not host, store, or process any school&apos;s
                academic data, students&apos; or guardians&apos; information, or anyone&apos;s
                login credentials. That data lives entirely inside each school&apos;s own,
                independently deployed instance of the software (its own database, on its own
                infrastructure), which the project has no access to. This policy therefore has
                nothing to say about that data - it's governed by whatever policy the operator
                of that specific instance sets, not by us.
              </p>

              <h2 id="this-website">
                2. This Website
              </h2>
              <p>
                This site is a static, informational page describing the OpenSchool project. It
                has no accounts, no sign-in, and no form that collects your name, email, or any
                other personal information. Whatever basic, non-invasive web server logs (such as
                page requests) our hosting provider generates to keep the site running securely
                are the extent of any technical data involved.
              </p>

              <h2 id="self-hosted-software">
                3. The OpenSchool Software
              </h2>
              <p>
                OpenSchool (the application) is self-hosted: anyone can deploy it, and whoever
                does becomes the sole operator and controller of the data entered into that
                instance - academic years, grades, classes, student and guardian records,
                attendance, and everything else described on the{' '}
                <Link to="/features">Features</Link> page. The project itself is not a party to that
                relationship, does not have access to any deployed instance&apos;s database, and
                does not act as a data processor for any school. If you&apos;re a student,
                guardian, teacher, or staff member with a question about how your school&apos;s
                specific instance handles your data, that question belongs with your school, not
                with this project.
              </p>

              <h2 id="cookies">
                4. Cookies &amp; Analytics
              </h2>
              <p>
                This website does not use advertising cookies, trackers, or third-party analytics.
                If that changes in the future, this policy will be updated to describe what&apos;s
                collected and how to opt out.
              </p>

              <h2 id="third-party-links">
                5. Third-Party Links
              </h2>
              <p>
                This site links out to GitHub (source code, issues, discussions, and security
                advisories). Those pages are operated by GitHub, Inc. and governed by{' '}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                  GitHub&apos;s own privacy statement
                </a>
                , not this one.
              </p>

              <h2 id="changes">
                6. Changes to This Policy
              </h2>
              <p>
                This policy may be updated as the website changes. Material changes will update
                the effective date at the top of this page.
              </p>

              <h2 id="contact">
                7. Contact
              </h2>
              <p>
                This is an open-source project without a support inbox. Questions about this site
                are best raised as a{' '}
                <a href={`${GITHUB_URL}/discussions`} target="_blank" rel="noopener noreferrer">
                  GitHub Discussion
                </a>
                , or see the <Link to="/community">Community</Link> page for other ways to reach
                the maintainers.
              </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
