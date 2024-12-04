import { MainHeader } from "@/components/common/main-header";

type MainLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <MainHeader />
      <div className="p-10">{children}</div>
    </div>
  );
}
