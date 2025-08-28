type Props = {
  name: string;
  description: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[330px] w-[330px]
  flex-col items-center justify-center whitespace-normal text-center text-white
  opacity-0 scale-95 transition-all duration-1000 ease-in-out
  hover:opacity-90 hover:scale-100 bg-button-primary cursor-pointer
  `;
  return (
    <li
      className="relative mx-5 inline-block h-[330px] 
    w-[330px] "
    >
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-1">{description}</p>
      </div>
      <img
        className="h-full object-cover w-full"
        src={image}
        alt={`${image}`}
      />
    </li>
  );
};

export default Class;
