import { expect, test, vi } from "vitest";
vi.mock("next/navigation", () => require("next-router-mock"));

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RootLayout from "./layout";

test("Layout navigation links", () => {
  render(
    <RootLayout>
      <div>Testing RootLayout</div>
    </RootLayout>,
  );

  // console.log(document.body.innerHTML);

  // home link
  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeDefined();
  expect(homeLink.getAttribute("href")).toBe("/");

  // projects link
  const projectsLink = screen.getByRole("link", { name: "Projects" });
  expect(projectsLink).toBeDefined();
  expect(projectsLink.getAttribute("href")).toBe("/all-projects");

  // contact me link
  const contactLink = screen.getByRole("link", { name: "Contact Me" });
  expect(contactLink).toBeDefined();
  expect(contactLink.getAttribute("href")).toBe("/contact-me");
  userEvent.click(contactLink);
  screen.debug();
});
