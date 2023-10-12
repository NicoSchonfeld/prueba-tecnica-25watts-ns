import React from "react";

import styles from "../../styles/Contact/Contact.module.css";

import image from "../../assets/25Watts/images/image.png";
import { Element } from "react-scroll";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      try {
        //localhost:8989/contact

        fetch("http://localhost:8989/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json",
          },
          body: JSON.stringify(data),
        }).then((res) => console.log(res));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Element name="contact">
      <section className={styles.sectionContact}>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <h2 className={styles.title}>
              Get in touch <br />
              <span className={styles.titleColor}>We are hiring!</span>
            </h2>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  maxLength: {
                    value: 20,
                    message: "Ingresar de 4 a 20 caracteres.",
                  },
                  minLength: {
                    value: 4,
                    message: "Ingresar de 4 a 20 caracteres.",
                  },
                })}
                className={styles.inputs}
              />
              <span className={styles.errorMessage}>
                {errors?.name?.message}
              </span>

              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  pattern: {
                    value: `^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$`,
                    message: "Formato de email invalido.",
                  },
                })}
                placeholder="info@25watts.com.ar"
                className={styles.inputs}
              />

              <span className={styles.errorMessage}>
                {errors?.email?.message}
              </span>

              <input
                type="number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  minLength: {
                    value: 10,
                    message: "minimo 10 numeros",
                  },
                })}
                placeholder="Phone"
                className={styles.inputs}
              />

              <span className={styles.errorMessage}>
                {errors?.phone?.message}
              </span>

              <textarea
                type="Message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximo 255 caracteres.",
                  },
                  minLength: {
                    value: 25,
                    message: "Minimo 25 caracteres.",
                  },
                })}
                placeholder="Message"
                className={styles.inputs}
              />

              <span className={styles.errorMessage}>
                {errors?.message?.message}
              </span>

              <button type="submit" className={styles.button}>
                Send
              </button>
            </form>
          </div>

          <div className={styles.containerRight}>
            <img src={image} alt="imageContact" className={styles.image} />
          </div>
        </div>

        <div className={styles.containerDecoration}></div>
      </section>
    </Element>
  );
};

export default Contact;
