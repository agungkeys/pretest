import { ReactNode } from "react"

type Container = {
  className?: String;
  children: ReactNode;
}

export default function Container({ className, children }:Container) {
  return (
    <div className={`container mx-auto ${className}`}>{children}</div>
  )
}