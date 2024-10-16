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
      title: "Getting Started",
      content: (
        <div>
          <p>To create your first website:</p>
          <ol>
            <li>Contact us for a consultation.</li>
            <li>We will guide you through the planning and design process.</li>
            <li>Once you're ready, we’ll begin building your website!</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Managing Your Website",
      content: (
        <div>
          <p>Learn how to manage your website effectively:</p>
          <ul>
            <li>Access the admin panel.</li>
            <li>Update content and images easily.</li>
            <li>Monitor website performance and traffic.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Troubleshooting Common Issues",
      content: (
        <div>
          <p>If you encounter issues:</p>
          <ul>
            <li>Check your internet connection.</li>
            <li>Clear your browser cache and cookies.</li>
            <li>If issues persist, contact our support team.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Contacting Support",
      content: (
        <div>
          <p>For assistance, reach out to us:</p>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Live Chat: Available on our website from 9 AM to 6 PM (EST)</p>
        </div>
      ),
    },
    {
      title: "Feedback and Suggestions",
      content: (
        <div>
          <p>Your feedback is important to us! Please let us know how we can improve:</p>
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
      <PageHeader title="Blogs" />
      <PageBanner
        title="Explore Our"
        title2="Latest Blogs"
        description="Stay updated with the latest insights, tutorials, and articles from industry experts. Discover useful tips and trends in web development, online learning, and much more."
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
