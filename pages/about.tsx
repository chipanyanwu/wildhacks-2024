import Head from 'next/head';
import Navbar from '../components/TopBar'; // Assuming you have a Navbar component

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us and our mission." />
      </Head>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a team dedicated to providing the best services in our industry. Our mission is to make a significant positive impact on our community and beyond through our products and services. 
        </p>
        <p>
          Founded in [Your Foundation Year], we have grown from a small startup into a key player in our market. Our journey has been fueled by hard work, innovation, and a commitment to excellence. We believe in continuous improvement and are always looking for ways to better serve our customers and community.
        </p>
        <p>
          Thank you for visiting our site and taking the time to learn more about us. If you have any questions or would like to get in touch, please don't hesitate to contact us.
        </p>
      </main>
    </div>
  );
};

export default About;
