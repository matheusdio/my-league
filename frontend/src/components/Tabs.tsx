import React, { useState, ReactNode, ButtonHTMLAttributes } from 'react';

interface TabsProps {
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
  children: ReactNode;
}

interface TabListProps {
  className?: string;
  children: ReactNode;
  onChange?: (index: number) => void;
  selectedIndex?: number;
}

interface TabTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  className?: string;
  selected?: boolean;
}

interface TabContentProps {
  index: number;
  className?: string;
  children: ReactNode;
  selectedIndex?: number;
}

const Tabs = ({ defaultIndex = 0, onChange, className = '', children }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handleChange = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  // Get the TabList child
  const tabListChild = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === TabList
  ) as React.ReactElement<TabListProps> | undefined;

  // Get all TabContent children
  const tabContentChildren = React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === TabContent
  ) as React.ReactElement<TabContentProps>[];

  return (
    <div className={`${className} space-y-4`}>
      <div className="flex border-b border-border">
        {tabListChild && React.cloneElement(tabListChild, {
          onChange: handleChange,
          selectedIndex
        })}
      </div>
      <div className="mt-2">
        {tabContentChildren.map((tabContent) => {
          return React.cloneElement(tabContent, {
            selectedIndex
          });
        })}
      </div>
    </div>
  );
};

const TabList = ({ className = '', children, onChange, selectedIndex }: TabListProps) => {
  return (
    <div className={`${className} flex items-center h-10 px-2`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TabTrigger) {
          const tabTrigger = child as React.ReactElement<TabTriggerProps>;
          const index = tabTrigger.props.index;
          return React.cloneElement(tabTrigger, {
            onClick: () => onChange?.(index),
            selected: index === selectedIndex
          });
        }
        return child;
      })}
    </div>
  );
};

TabList.displayName = 'TabList';

const TabTrigger = ({ index, className = '', selected = false, children, ...props }: TabTriggerProps) => {
  return (
    <button
      className={`flex-1 items-center justify-center text-sm font-medium transition-all hover:bg-muted
        ${selected
          ? 'text-primary border-b-2 border-primary pb-[calc(100%-10px)]'
          : 'text-text-secondary hover:text-text-primary'}`}
      {...props}
    >
      {children}
    </button>
  );
};

TabTrigger.displayName = 'TabTrigger';

const TabContent = ({ index, className = '', children, selectedIndex, ...rest }: TabContentProps) => {
  return (
    <div
      className={`${className} ${selectedIndex === index ? 'block' : 'hidden'} animation-fade-in`}
      {...rest}
    >
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';

// Attach subcomponents to Tabs component
Tabs.TabList = TabList;
Tabs.TabTrigger = TabTrigger;
Tabs.TabContent = TabContent;

export default Tabs;
