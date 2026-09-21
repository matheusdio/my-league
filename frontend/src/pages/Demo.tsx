import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import Tabs from '../components/Tabs';
import Loading from '../components/Loading';
import { User } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tighter text-center text-balance">
        My League Component Demo
      </h1>
      <p className="text-center text-text-secondary max-w-2xl mx-auto">
        Demonstration of the foundational components for My League frontend
      </p>

      {/* Typography Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Typography</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <p className="text-3xl font-bold tracking-tighter">Display</p>
          <p className="text-2xl font-semibold tracking-tight">Heading</p>
          <p className="text-xl font-semibold">Title</p>
          <p className="text-base font-normal">Body</p>
          <p className="text-sm font-medium text-text-secondary">Label</p>
          <p className="text-xs font-normal text-text-secondary">Caption</p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary">
            <User className="h-4 w-4 mr-2" /> With Icon
          </Button>
          <Button variant="outline" isLoading>
            Loading
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* Badges Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="primary" outline>Outline Primary</Badge>
          <Badge variant="success" outline>Outline Success</Badge>
        </div>
      </section>

      {/* Avatar Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatars</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar fallback="ML" size="xs" />
          <Avatar fallback="ML" size="sm" />
          <Avatar fallback="ML" size="md" />
          <Avatar fallback="ML" size="lg" />
          <Avatar fallback="ML" size="xl" />
          <Avatar fallback="TS" shape="square" size="md" />
          <Avatar fallback="JD" size="md" className="border-2 border-primary" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Cards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card variant="default">
            <h3 className="text-xl font-semibold mb-2">Default Card</h3>
            <p className="text-base font-normal">
              This is a default card with basic styling.
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
            <p className="text-base font-normal">
              This card has shadow and hover effects.
            </p>
            <Button variant="outline" size="sm" className="mt-3">
              Action
            </Button>
          </Card>
          <Card variant="default">
            <div className="flex items-center space-x-3">
              <Avatar fallback="JG" size="lg" />
              <div>
                <h3 className="text-xl font-semibold block">Team Name</h3>
                <p className="text-xs font-normal text-text-secondary">
                  League Division
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tabs</h2>
        <Tabs defaultIndex={0} onChange={(index: number) => console.log('Tab changed to:', index)}>
          <Tabs.TabList>
            <Tabs.TabTrigger index={0}>Overview</Tabs.TabTrigger>
            <Tabs.TabTrigger index={1}>Stats</Tabs.TabTrigger>
            <Tabs.TabTrigger index={2}>Settings</Tabs.TabTrigger>
          </Tabs.TabList>
          <Tabs.TabContent index={0}>
            <h3 className="text-xl font-semibold">Overview Content</h3>
            <p className="text-base font-normal mt-2">
              This is the overview tab content. It shows general information.
            </p>
          </Tabs.TabContent>
          <Tabs.TabContent index={1}>
            <h3 className="text-xl font-semibold">Stats Content</h3>
            <p className="text-base font-normal mt-2">
              This tab shows statistical data and metrics.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-text-secondary">Matches Played</p>
                <p className="text-xl font-semibold">24</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm font-medium text-text-secondary">Win Rate</p>
                <p className="text-xl font-semibold">75%</p>
              </div>
            </div>
          </Tabs.TabContent>
          <Tabs.TabContent index={2}>
            <h3 className="text-xl font-semibold">Settings Content</h3>
            <p className="text-base font-normal mt-2">
              This tab contains configuration options.
            </p>
          </Tabs.TabContent>
        </Tabs>
      </section>

      {/* Loading Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Loading States</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">Spinner</p>
            <div className="mx-auto mt-2">
              <Loading variant="spinner" size="md" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">Small Spinner</p>
            <div className="mx-auto mt-2">
              <Loading variant="spinner" size="sm" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">Large Spinner</p>
            <div className="mx-auto mt-2">
              <Loading variant="spinner" size="lg" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">Skeleton Text</p>
            <div className="space-y-2 mt-2">
              <Loading variant="skeleton" width={200} height={16} className="mx-auto" />
              <Loading variant="skeleton" width={150} height={16} className="mx-auto mt-1" />
              <Loading variant="skeleton" width={100} height={16} className="mx-auto mt-1" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">Skeleton Card</p>
            <div className="mt-2">
              <Card variant="elevated" className="w-48 h-32">
                <Loading variant="skeleton" width={100} height={8} className="mx-auto mt-4" />
                <Loading variant="skeleton" width={120} height={6} className="mx-auto mt-2" />
                <Loading variant="skeleton" width={80} height={4} className="mx-auto mt-1" />
              </Card>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">Animated Skeleton</p>
            <div className="space-y-2 mt-2">
              <Loading variant="skeleton" width={180} height={16} className="mx-auto" />
              <Loading variant="skeleton" width={150} height={16} className="mx-auto mt-1" />
              <Loading variant="skeleton" width={120} height={16} className="mx-auto mt-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
