import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [muestras, setMuestras] = useState([]);

  useEffect (()=> {
    (async () => {
      let response = await fetch('http://localhost:1337/blogs');
      let data = await response.json();
      setBlogs(data);

      response = await fetch('http://localhost:1337/cursos');
      data = await response.json();
      setCursos(data);

      response = await fetch('http://localhost:1337/muestras');
      data = await response.json();
      setMuestras(data);
    })()
  }, [])
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/simple.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a Paine
        </h1>
        <div>
          <h3>Para el blog</h3>
          <div>
              {blogs.map(blog =>{
                return (
                <div key={blog.id}>
                  <div>{blog.titulo}</div>
                  <div><img src={`http://localhost:1337${blog.imagen.[0].url}`} width='150' height='160'/></div>
                </div>
                )
              })}
            
          </div>
          <h3>Para los cursos</h3>
          <div>
              {cursos.map(curso =>{
                return (
                <div key={curso.id}>
                  <div>{curso.nombre}</div>
                  <div><img src={`http://localhost:1337${curso.imagen.[0].url}`} width='150' height='160'/></div>
                </div>
                )
              })}
            
          </div>
          <h3>Para mostrar los trabajos hechos</h3>
          <div>
              {muestras.map(muestra =>{
                return (
                <div key={muestra.id}>
                  <div>{muestra.titulo}</div>
                  <div><img src={`http://localhost:1337${muestra.imagen.[0].url}`} width='150' height='160'/></div>
                </div>
                )
              })}
            
          </div>
        </div>
      </main>        


       {/*  <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
 
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
