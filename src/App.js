import {useEffect, useState} from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const user = await resp.json()
        setData(user)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, []);

  console.log(data)
  return (
      <main>
        <section className='container'>

          <h2>fetch data example</h2>
          <h3>Github Users</h3>

          {data.map((user) => {
            const {id, login, avatar_url, url} = user;
            return (
                <div key={id} className='userBox'>
                  <div className='image'>
                    {<img src={avatar_url} alt=""/>}
                  </div>
                  <div className='nameProfilebox'>
                    <h1>{login}</h1>
                    <a href={url}>Profile</a>

                  </div>
                </div>
            )
          })}
        </section>

      </main>

  )
};
export default FetchData;


