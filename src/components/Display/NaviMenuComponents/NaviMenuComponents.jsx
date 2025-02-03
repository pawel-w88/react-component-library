import React from "react";
import { Sidebar } from "../../NaviComponents/Sidebar";
import { Breadcrumbs } from "../../NaviComponents/Breadcrumbs";
import { DropdownMenu } from "../../NaviComponents/DropdownMenu";
import "./NaviMenuComponents.scss";

export const NaviMenuComponents = () => {
  const sidebarItems = ["Home", "About", "Services", "Contact"];
  const breadcrumbPaths = ["Home", "Products", "Category", "Product Name"];
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="NaviMenuComponents ">
      <h2>NaviMenuComponents</h2>
      <DropdownMenu title="Options" options={dropdownOptions} />
      <Sidebar items={sidebarItems} />
      <Breadcrumbs paths={breadcrumbPaths} />
    </div>
  );
};
