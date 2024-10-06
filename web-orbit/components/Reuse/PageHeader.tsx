interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className="bg-indigo-50 pt-28 pb-6 px-5 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-4xl font-extrabold text-indigo-900 tracking-wide drop-shadow-lg">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;


