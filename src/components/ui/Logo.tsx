
import React from "react"

type LogoProps = {
  small?: boolean
}

const Logo = ({ small }: LogoProps) => {
  return (
    <img
      src={small ? "/logo-dark.webp" : "/logo-light.webp"}
      alt="לוגו העסק"
      width={160}
      height={60}
      className="transition-all duration-300"
      style={{ objectFit: "contain" }}
    />
  )
}

export default Logo
