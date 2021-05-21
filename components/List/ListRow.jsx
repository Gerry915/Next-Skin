import styles from "../../styles/List/ListRow.module.scss";
import Link from "next/link";

const ListRow = (props) => {
  return (
    <Link href={`list/${props.id.toString()}`}>
      <div className={[styles.listrow, props.className].join(" ")}>
        <h2>{props.title}</h2>
        <p>{props.completed ? "Completed" : "Pending"}</p>
      </div>
    </Link>
  );
};

export default ListRow;
