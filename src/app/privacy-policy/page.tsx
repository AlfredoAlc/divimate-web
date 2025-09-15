"use client";

import "../globals.css";

import Link from "next/link";

import styles from "./page.module.css";
import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="page">
      <main>
        <Header />
        <div className={styles.container}>
          <p className={styles.paragraph}>
            Effective Date: <strong>March, 2025</strong>
          </p>
          <p className={styles.paragraph}>
            At DiviMate, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and share your information when you
            use our app. By using DiviMate, you consent to the practices
            described in this Privacy Policy.
          </p>
          <ol type="A">
            <li>
              <strong>Information We Collect</strong>
            </li>
            <ul>
              <li>
                <strong>Personal Information:</strong> We collect personal
                information from you when you sign up or log in, including{" "}
                <strong>Email address</strong> and <strong>Full Name</strong>.
                <br />
                <br />
                This information is used for authentication, user management,
                and to provide a personalized experience within the app.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect anonymized usage data to
                improve the app&apos;s functionality, performance, and user
                experience. This includes interactions with the app, such as
                buttons clicked, pages viewed, and features used.
              </li>
              <li>
                <strong>Local Storage:</strong> The app stores data locally on
                your device, such as expense records and other personal data to
                provide a good user experience. you choose to save.
              </li>
              <li>
                <strong>Third-Party Services:</strong> The app includes
                third-party services, such as Google AdMob, that may collect
                information about you. For example, Google may collect data
                through their advertising SDK, including device information, IP
                address, and location data for personalized ads.
              </li>
            </ul>
            <li>
              <strong>Ads</strong>
            </li>
            <p className={styles.paragraph}>
              The app uses Google AdMod to display advertisements. Google may
              use data collected through the app to personalize ads based on
              user interests. You can learn more about Google&lsquo;s
              advertising practices and how to opt out of personalized ads by
              visiting the following link:{" "}
              <Link
                href={"https://policies.google.com/privacy?hl=en&gl=US"}
                target="_blank"
                className={styles.link}
              >
                Google Privacy & Terms.
              </Link>
            </p>
            <li>
              <strong>Data Usage</strong>
            </li>
            <p className={styles.paragraph}>
              The personal information we collect (email, full name) is used to:
            </p>
            <ul>
              <li>Authenticate and manage user accounts.</li>
              <li>
                Provide a personalized user experience and services, such as
                tracking expenses.
              </li>
              <li>
                Communicate with you for app-related notifications and updates.
              </li>
            </ul>
            <li>
              <strong>Data Sharing</strong>
            </li>
            <p className={styles.paragraph}>
              We do not sell or share your personal information with third
              parties, except as necessary for:
            </p>
            <ul>
              <li>
                <strong>Third-Party Advertising:</strong> We share usage data
                with ad providers (e.g., Google Ads) to serve personalized ads.
              </li>
              <li>
                <strong>Service Providers:</strong> We may share data with
                trusted third-party service providers that help us operate the
                app, such as cloud storage providers.
              </li>
            </ul>
            <li>
              <strong>Data Security</strong>
            </li>
            <p className={styles.paragraph}>
              We take reasonable precautions to protect your data from
              unauthorized access, alteration, or destruction. However, no
              method of transmission over the Internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
            <li>
              <strong>Children&lsquo;s Privacy</strong>
            </li>
            <p className={styles.paragraph}>
              Our app is not intended for children under the age of 13, and we
              do not knowingly collect information from children.
            </p>
            <li>
              <strong>Changes to This Privacy Policy</strong>
            </li>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time. When we do,
              we will post the revised policy on this page and update the
              effective date at the top of the policy.
            </p>
          </ol>
        </div>
      </main>
    </div>
  );
}
