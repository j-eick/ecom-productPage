import { ReactNode } from "react";

type ProdPreviewProps = {
  children: ReactNode;
};

export default function ProdPreview({ children }: ProdPreviewProps) {
  return <div>{children}</div>;
}
