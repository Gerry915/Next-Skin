import axios from "axios";
import ListRow from "../../components/List/ListRow";
import styles from "../../styles/List/List.module.scss";
import { useEffect } from "react";

export default function List({ todos }) {
  useEffect(() => {
    // Call when finished loading...
    const rows = document.querySelectorAll(".list-row");

    const pendingBtn = document.querySelector(".pending-btn");
    const completedBtn = document.querySelector(".completed-btn");

    pendingBtn.addEventListener("click", () => {
      Array.from(rows).forEach((element) => {
        const status = element.getElementsByTagName("p")[0].innerHTML;
        if (status === "Completed") {
          if (pendingBtn.classList.contains(`${styles["button-active"]}`)) {
            element.classList.remove(`${styles.hide}`);
            element.classList.remove(`${styles.collapse}`);
          } else {
            element.classList.add(`${styles.collapse}`);
            setTimeout(() => {
              element.classList.add(`${styles.hide}`);
            }, 490);
          }
        }
      });
      toggleBtnActive(pendingBtn);
    });

    completedBtn.addEventListener("click", () => {
      Array.from(rows).forEach((element) => {
        const status = element.getElementsByTagName("p")[0].innerHTML;
        if (status === "Pending") {
          if (completedBtn.classList.contains(`${styles["button-active"]}`)) {
            element.classList.remove(`${styles.hide}`);
            element.classList.remove(`${styles.collapse}`);
          } else {
            element.classList.add(`${styles.collapse}`);
            setTimeout(() => {
              element.classList.add(`${styles.hide}`);
            }, 490);
          }
        }
      });
      toggleBtnActive(completedBtn);
    });
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <h1>List</h1>
        <div>
          <button className="pending-btn">Pending</button>
          <button className="completed-btn">Completed</button>
        </div>
      </div>

      <div>
        {todos.map((item, index) => {
          return (
            <ListRow
              className="list-row"
              key={index}
              userId={item.userId}
              id={index}
              title={item.title}
              completed={item.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .catch((e) => {
      console.log(e);
    });

  console.log(res.data[0]);

  return {
    props: { todos: res.data },
  };
}

function toggleBtnActive(btn) {
  if (btn.classList.contains(`${styles["button-active"]}`)) {
    btn.classList.remove(`${styles["button-active"]}`);
  } else {
    btn.classList.add(`${styles["button-active"]}`);
  }
}
