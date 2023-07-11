import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PolicyPrivacy = () => {
  return (
    <Stack sx={{ padding: "2em" }}>
      <Stack
        direction="column"
        sx={{
          background: "#fcfcfc",
          marginX: "2em",
        }}
      >
        <Typography
          sx={{
            margin: "38px 0 40px",
            fontSize: { xs: "32px !import", sm: "90px" },
            fontWeight: "700",
            textAlign: "left",
            marginBottom: "23px",
            textTransform: "capitalize",
            lineHeight: { xs: "1", sm: "90px" },
            fontFamily: "Cormorant Upright,serif",
          }}
        >
          Privacy Policy
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          At MAHCH SOLUTION Inc, we are committed to protecting the privacy and
          security of your personal information. This Privacy Policy outlines
          how we collect, use, disclose, and protect the information we gather
          from our website visitors, clients, and other individuals who interact
          with our services. By accessing or using our website or services, you
          consent to the practices described in this Privacy Policy.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          1. Information We Collect
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          1.1 Personal Information:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We may collect personal information such as your name, email address,
          phone number, and other contact details when you voluntarily provide
          them to us through our website, email, or other means of
          communication.
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          1.2 Usage Information:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We may collect non-personal information about your interaction with
          our website and services, including IP addresses, browser information,
          device information, and website usage data. This information is
          collected through cookies, log files, and similar technologies to
          enhance your experience and improve our services.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          2. Use of Collected Information
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          2.1 Personal Information:
        </Typography>
        <Typography
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: "15px",
          }}
        >
          We may use your personal information to:
        </Typography>
        <ul>
          <li
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "15px",
              marginLeft: "2em",
            }}
          >
            Respond to your inquiries and provide requested information or
            services.
          </li>
          <li
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "15px",
              marginLeft: "2em",
            }}
          >
            Process and fulfill your orders or service requests.
          </li>
          <li
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "15px",
              marginLeft: "2em",
            }}
          >
            Communicate with you regarding updates, offers, promotions, or other
            relevant information about our services.
          </li>
          <li
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "15px",
              marginLeft: "2em",
            }}
          >
            Improve our website, services, and overall customer experience.
          </li>
          <li
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "15px",
              marginLeft: "2em",
            }}
          >
            Conduct market research, analytics, and statistical analysis.
          </li>
          <li
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "15px",
              marginLeft: "2em",
            }}
          >
            Comply with legal obligations or enforce our terms and policies.
          </li>
        </ul>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          2.2 Usage Information:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We may use usage information to analyze trends, administer the
          website, track user activities, and gather demographic information for
          aggregate use. This helps us improve our website, tailor content to
          users' interests, and enhance overall usability.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          3. Information Sharing and Disclosure
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          3.1 Third-Party Service Providers:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We may share your personal information with trusted third-party
          service providers who assist us in operating our business, delivering
          services, or conducting activities on our behalf. These providers are
          obligated to keep your information confidential and only use it for
          the purposes specified by us.
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          3.2 Legal Compliance:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We may disclose your personal information if required by law,
          regulation, legal process, or government request. We may also disclose
          information to protect our rights, property, or safety, or that of
          others.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          4. Data Security
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We employ appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet or
          electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          5. Your Choices and Rights
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          5.1 Opt-Out:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          You may opt-out of receiving promotional emails from us by following
          the instructions provided in the email or contacting us directly.
          However, please note that even if you opt-out of marketing
          communications, we may still send you transactional or administrative
          messages related to our ongoing business relationship.
        </Typography>
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          5.2 Access and Correction:
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          You have the right to access, update, or correct your personal
          information held by us. If you would like to exercise this right,
          please contact us using the information provided below.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          6. Changes to this Privacy Policy
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We encourage you to review
          this Privacy Policy periodically for any updates. Your continued use
          of our website or services after the posting of changes constitutes
          your acceptance of such changes.
        </Typography>
        <br />
        <Typography
          fontSize="15px"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight="600"
        >
          Contact Us
        </Typography>
        <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at:
        </Typography>
        <br />
        <Stack direction="column">
          <Typography
            fontSize="15px"
            fontFamily="Josefin Sans, sans-serif"
            fontWeight="600"
          >
            MAHCH SOLUTION Inc
          </Typography>
          <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
            Porto-novo, Benin Republic
          </Typography>
          <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
            Email:
            <Link
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "15px",
              }}
              to="mailto:mahch.business@gmail.com"
            >
              mahch.business@gmail.com
            </Link>
          </Typography>
          <br />
          <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
            We will respond to your inquiries and requests in a timely manner.
          </Typography>
          <Typography fontSize="15px" fontFamily="Josefin Sans, sans-serif">
            Thank you for entrusting MAHCH SOLUTION Inc with your personal
            information. We are committed to protecting your privacy and
            providing a safe and secure experience for our clients and website
            visitors.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PolicyPrivacy;
