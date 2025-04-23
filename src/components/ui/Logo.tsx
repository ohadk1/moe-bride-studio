import Image from "next/image"

type LogoProps = {
  small?: boolean
}

const Logo = ({ small }: LogoProps) => {
  return (
    <Image
      src={small ? "/logo-dark.webp" : "/logo-light.webp"}
      alt="לוגו העסק"
      width={160}
      height={60}
      className="transition-all duration-300"
      priority
    />
  )
}

export default Logo

