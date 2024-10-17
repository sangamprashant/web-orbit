"use client";

import React, { useState } from 'react';
import { Collapse, Typography, Button } from 'antd';
import PageHeader from '@/components/Reuse/PageHeader';
import PageBanner from '@/components/Reuse/PageBanner';
import { helpCenterBanner } from '@/assets/assets';
import PageLayout from '@/components/Reuse/PageLayout';

const { Panel } = Collapse;
const { Title } = Typography;

interface NavItem {
  title: string;
  content: JSX.Element;
}

const HelpCenter: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string[]>([]);

  const navItems: NavItem[] = [
    {
      title: "Getting Started with Our Services",
      content: (
        <div>
          <p>To begin using our web development services:</p>
          <ol>
            <li>Contact our team for a personalized consultation.</li>
            <li>We will gather all your requirements and discuss your vision for the website.</li>
            <li>Our team will provide you with a detailed plan and timeline.</li>
            <li>Once approved, we will start designing and building your custom website.</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Customizing Your Website",
      content: (
        <div>
          <p>Want to update or customize your website? Here's how:</p>
          <ul>
            <li>Access the admin panel using your credentials.</li>
            <li>Navigate to the customization section to update text, images, and other content.</li>
            <li>You can also change the design and layout using our drag-and-drop editor.</li>
            <li>Save changes and preview your website before publishing.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "SEO and Performance Optimization",
      content: (
        <div>
          <p>Follow these steps to improve your website's SEO and performance:</p>
          <ul>
            <li>Ensure that your website content is SEO-optimized using relevant keywords.</li>
            <li>Regularly update meta tags, descriptions, and alt text for images.</li>
            <li>Use our integrated SEO tools to track your performance and get improvement suggestions.</li>
            <li>Monitor page load speeds and optimize images and scripts to enhance performance.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Troubleshooting Technical Issues",
      content: (
        <div>
          <p>If you run into technical issues with your website:</p>
          <ul>
            <li>First, check your internet connection and ensure it's stable.</li>
            <li>Clear your browser cache and cookies, then try reloading the page.</li>
            <li>Ensure that your domain and hosting services are up to date.</li>
            <li>If the issue persists, contact our technical support team for further assistance.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Contacting Support",
      content: (
        <div>
          <p>If you need help with any service or website issue, feel free to reach out to us:</p>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Live Chat: Available on our website from 9 AM to 6 PM (EST)</p>
        </div>
      ),
    },
    {
      title: "Providing Feedback and Suggestions",
      content: (
        <div>
          <p>We value your feedback! Please share your suggestions for improving our services:</p>
          <Button type="link">Submit Feedback</Button>
        </div>
      ),
    },
  ];

  // Update the parameter to be a string array
  const handleCollapseChange = (keys: string[]) => {
    setActiveKey(keys);
  };

  return (
    <>
      <PageHeader title="Help Center" />
      <PageBanner
        title="How Can"
        title2="We Help?"
        description="Explore our knowledge base, get troubleshooting tips, and contact our support team for further assistance."
        image={helpCenterBanner}
      />
      <PageLayout>
        <Title level={2}>Help Center</Title>
        <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
          {navItems.map((item, index) => (
            <Panel header={item.title} key={index.toString()}>
              {item.content}
            </Panel>
          ))}
        </Collapse>
      </PageLayout>
    </>
  );
};

export default HelpCenter;
