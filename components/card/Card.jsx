import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id, username, name, email }) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className="bg-white cursor-pointer w-72 p-6 rounded-lg shadow-xl  hover:scale-110 Name hover:transition-all">
        <div className=" flex  absolute">
          <div className="bg-slate-600 p-1 text-white cursor-pointer text-xs rounded-md">
            {username}
          </div>
        </div>
        <Image
          className="animate-bounce"
          src={`https://robohash.org/${id}`}
          alt={name}
          width={300}
          height={250}
        />

        <div className="flex justify-center flex-col items-center mt-3 text-gray-600 ">
          <h3 className="cursor-pointer text-2xl">{name}</h3>
          <p className="text-lg">{email}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
