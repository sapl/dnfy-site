import Image from "next/image";
import { people, type PersonId } from "@/content/people";

type Props = {
  person: PersonId;
  size?: number;
  radius?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

export function Avatar({ person, size = 26, radius = 99, className, style }: Props) {
  const p = people[person];
  return (
    <Image
      src={p.avatar}
      alt={p.name}
      title={p.name}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, borderRadius: radius, objectFit: "cover", flex: "none", ...style }}
    />
  );
}
