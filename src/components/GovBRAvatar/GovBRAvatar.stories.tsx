import type { Meta, StoryObj } from "@storybook/react";
import { GovBRAvatar } from "./GovBRAvatar.js";

const meta: Meta<typeof GovBRAvatar> = {
  title: "Components/GovBRAvatar",
  component: GovBRAvatar,
};
export default meta;

type Story = StoryObj<typeof GovBRAvatar>;

export const StrictGovBr: Story = {
  args: {
    user: { name: "Luciano", image: "" },
    menuItems: [
      { label: "Meu perfil", href: "/perfil" },
      { label: "Sair", href: "/logout" },
    ],
    onNavigate: (href) => alert(`Navigating to ${href}`),
    strictGovBr: true,
  },
};

export const Customizable: Story = {
  args: {
    user: { name: "Luciano", image: "https://placekitten.com/80/80" },
    menuItems: [
      { label: "Perfil", href: "/perfil" },
      { label: "Logout", href: "/logout" },
    ],
    avatarSize: 60,
    textMaxWidth: 150,
    className: "custom-shadow",
    onNavigate: (href) => console.log("Goto", href),
    strictGovBr: false,
  },
};
