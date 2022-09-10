import { Row } from "./row";
import styles from "./list.module.css";
import { Nav } from "./nav";

export function List() {
	return <div>
		<Nav />
		<div className={styles.list}>
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
			<div className={styles.sep} />
			<Row />
		</div>
	</div>
}