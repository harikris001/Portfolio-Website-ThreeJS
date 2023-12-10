import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currAnimation, setCurrAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrAnimation("walk");
  const handleBlur = () => setCurrAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrAnimation("hit");

    var service_id = process.env.VITE_APP_EMAILJS_SERVICE_ID
    var templete_id = process.env.VITE_APP_EMAILJS_TEMPLATE_ID
    var public_key = process.env.VITE_APP_EMAILJS_PUBLIC_KEY

    emailjs
      .send(
        service_id,
        templete_id,
        {
          from_name: form.name,
          to_name: "Harikrishna R Nair",
          from_email: form.email,
          to_email: "harikrishnar.official@gmail.com",
          message: form.message,
        },
        public_key
      )
      .then(() => {
        setLoading(false);
        showAlert( {show:true, text: 'Message Sent Successfully', type: 'success'})

        setTimeout(()=> {
          setCurrAnimation('idle')
          setForm({name: '', email: '', message: ''})
        },[3000])
      })
      .catch((error) => {
        setLoading(false);
        setCurrAnimation("idle");
        console.log(error);
        showAlert({ show: true, text: 'Message not Delivered', type: 'danger' })
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/> }
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currAnimation={currAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
