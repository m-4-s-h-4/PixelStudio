import { ThemeSwitcher } from "./theme-switcher";
import { Meta, StoryObj } from "@storybook/react";

interface ThemeSwitcherProps {}

export default {
  title: "Example/ThemeSwitcher",
  component: ThemeSwitcher,
} as Meta<ThemeSwitcherProps>;

export const DarkMode: StoryObj<ThemeSwitcherProps> = {
  args: {},
};

export const LightMode: StoryObj<ThemeSwitcherProps> = {
  args: {},
};
