import { describe, it, expect, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeSwitcher } from "./theme-switcher";

describe("ThemeSwitcher Component", () => {
  afterEach(cleanup);

  it("toggles theme from dark to light and vice versa", async () => {
    const { getByRole } = render(<ThemeSwitcher />);
    const button = getByRole("button");

    expect(button).toHaveTextContent("🌙");

    fireEvent.click(button);
    expect(button).toHaveTextContent("☀️");

    fireEvent.click(button);
    expect(button).toHaveTextContent("🌙");
  });
});
