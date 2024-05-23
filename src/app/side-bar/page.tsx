import Link from 'next/link';

const SideBar: React.FC = () => {
  return (
    <div className="w-1/3 h-full bg-gray-200 fixed left-0">
    {/* Content for the left side */}
      <div className="w-3/4 mx-auto text-center text-4xl">
                Large Text Centered
      </div>
  </div>
  );
};

export default SideBar;
