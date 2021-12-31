import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  PhoneIcon,
  UserIcon,
  GlobeAltIcon,
  ChatAltIcon,
  ArrowLeftIcon,
} from '@heroicons/react/outline';

const PageDetail = () => {
  const [details, setDetails] = useState([]);
  const params = useRouter();

  const pageId = params.query.id;

  useEffect(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${pageId}`
    );
    const data = await res.json();
    setDetails(data);
  }, []);

  return (
    <div className="bg-gray-900 overflow-hidden">
      <button
        className="flex justify-center items-center pt-5 pl-4 text-lg text-white rounded-md"
        onClick={() => params.back()}
      >
        <ArrowLeftIcon className="h-5 w-5 text-white mr-2 animate-pulse" />
        <span>back</span>
      </button>
      <div className="flex justify-center items-center flex-wrap min-h-screen rounded-lg">
        <Image
          src={`https://robohash.org/${details.id}`}
          alt={details.name}
          width={400}
          height={300}
        />

        <div className="flex flex-col justify-center ">
          <p className="flex items-center text-gray-400 text-lg">
            <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
            {details.name} | username: ({details.username})
          </p>
          <p className="flex items-center text-gray-400 text-lg">
            <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
            {details.phone}
          </p>
          <p className="flex items-center text-gray-400 text-lg">
            <ChatAltIcon className="h-5 w-5 text-gray-400 mr-2" />
            {details.email}
          </p>
          <p className="flex items-center text-gray-400 text-lg">
            <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
            {details.website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageDetail;
