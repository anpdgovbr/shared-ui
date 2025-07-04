import React, { useEffect, useRef, useState } from "react";

export interface GovBRAvatarProps {
  user: {
    name?: string;
    image?: string;
  };
  onNavigate: (href: string) => void;
  menuItems?: { label: string; href: string }[];
  avatarSize?: number;
  textMaxWidth?: number;
  className?: string;
  strictGovBr?: boolean;
}

export const GovBRAvatar: React.FC<GovBRAvatarProps> = ({
  user,
  onNavigate,
  menuItems = [
    { label: "Meu perfil", href: "/perfil" },
    { label: "Sair", href: "/logout" },
  ],
  avatarSize = 40,
  textMaxWidth = 300,
  className = "",
  strictGovBr = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (href: string) => {
    setMenuOpen(false);
    onNavigate(href);
  };

  const avatarClasses = strictGovBr ? "br-avatar" : `br-avatar ${className}`;

  const buttonClasses = strictGovBr ? "br-sign-in" : `br-sign-in ${className}`;

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      <button
        type="button"
        className={buttonClasses}
        aria-label={`Olá, ${user?.name || "Usuário"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {user?.image ? (
          <span className={avatarClasses}>
            <img
              src={user.image}
              alt={user.name || "Usuário"}
              style={{
                width: strictGovBr ? "40px" : `${avatarSize}px`,
                height: strictGovBr ? "40px" : `${avatarSize}px`,
                borderRadius: "50%",
              }}
            />
          </span>
        ) : (
          <span className={avatarClasses} title={user?.name || ""}>
            <span className="content bg-orange-vivid-30 text-pure-0">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </span>
          </span>
        )}
        <span
          style={{
            display: "inline-block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: strictGovBr ? "300px" : `${textMaxWidth}px`,
            marginLeft: "8px",
          }}
        >
          Olá,{" "}
          <span style={{ fontWeight: 600 }}>{user?.name || "Usuário"}</span>
        </span>
        <span style={{ marginLeft: "4px" }}>{menuOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className="br-list"
        hidden={!menuOpen}
        style={{
          position: "absolute",
          right: 0,
          top: "100%",
          zIndex: 1000,
          width: "240px",
          marginTop: "0px",
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="br-item"
            role="menuitem"
            onClick={() => handleNavigation(item.href)}
            style={{
              width: "100%",
              textAlign: "left",
              justifyContent: "flex-start",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
