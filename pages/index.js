import Head from 'next/head';
import { useState } from 'react';
import { Card, SearchFilter } from '../components';

export default function Home({ data }) {
  const [robotsData, setRobotsData] = useState(data);
  const [filteredRobotsData, setfilteredRobotsData] = useState(data);
  const [keyword, setKeyword] = useState('');

  const handleKeyPress = (event) => {
    if (keyword !== '') {
      setKeyword(event);
      const filteredData = robotsData.filter((robot) => {
        return Object.values(robot)
          .join('')
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      setfilteredRobotsData(filteredData);
    } else {
      setRobotsData(robotsData);
    }
  };

  return (
    <div className="main">
      <Head>
        <title>ROBOTFRIENDS with NextJS + Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchFilter handleKeyPress={handleKeyPress} setKeyword={setKeyword} />
        <section className="mt-10 grid gap-8 grid-cols-none grid-rows-3 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {keyword.length > 1
            ? filteredRobotsData.map((robot) => (
                <Card
                  key={robot.id}
                  id={robot.id}
                  username={robot.username}
                  name={robot.name}
                  email={robot.email}
                />
              ))
            : robotsData.map((robot) => (
                <Card
                  key={robot.id}
                  id={robot.id}
                  username={robot.username}
                  name={robot.name}
                  email={robot.email}
                />
              ))}
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
